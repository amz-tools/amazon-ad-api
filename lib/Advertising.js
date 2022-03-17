const CustomError = require('./CustomError');
const request = require('./request');
const Credentials = require('./Credentials');
const operations = require('./operations');
const reports = require('./reports');
const JSONbig = require('json-bigint')({storeAsString:true});
const zlib = require('zlib');
const xml_parser = require('fast-xml-parser');
const querystring = require('querystring');

class Advertising {

  constructor(config){
    this._region = config.region;
    this._country = config.country;
    this._refresh_token = config.refresh_token;
    this._access_token = config.access_token;
    this._profiles = config.profiles || {};
    this._options = Object.assign({
      auto_request_token:true,
      auto_request_throttled:true,
      use_sandbox:false,
      max_retries:20
    }, config.options);
    this._credentials = new Credentials(config.credentials, this._options.credentials_path).load();
    this._big_int_keys = ['campaignId', 'keywordId', 'adGroupId', 'targetId', 'profileId'];
    this._param_regex = {
      '{profileId}':'[0-9]*',
      '{campaignId}':'[0-9]*',
      '{adGroupId}':'[0-9]*',
      '{keywordId}':'[0-9]*',
      '{asinValue}':'[A-Z0-9]{10}',
      '{adId}':'[0-9]*',
      '{targetId}':'[0-9]*',
      '{recordType}':'(campaigns|adGroups|keywords|productAds|asins|targets)',
      '{reportId}':'[^/]*',
      '{snapshotId}':'[0-9]*',
      '{budgetRuleId}':'[^/]*',
      '{campaignOptimizationId}':'[^/]*',
      '{categoryId}':'[^/]*',
      '{draftCampaignId}':'[0-9]*',
      '{brandName}':'[^/]*',
      '{brandEntityId}':'[^/]*',
      '{managerAccountId}':'[^/]*',
      '{portfolioId}':'[^/]*',
      '{invoiceId}':'[^/]*',
      '{audienceId}':'[^/]*',
      '{negativeTargetId}':'[0-9]*',
      '{requestId}':'[^/]*',
      '{orderId}':'[^/]*',
      '{lineItemId}':'[^/]*',
      '{studyId}':'[^/]*'
    };
    this._valid_record_types = ['campaigns','adGroups','keywords','productAds','asins','targets']

    if (!this._region || !/^(eu|na|fe)$/.test(this._region)){
      throw new CustomError({
        code:'NO_VALID_REGION_PROVIDED',
        message:'Please provide one of: "eu", "na" or "fe"'
      });
    }
    if (!this._country){
      throw new CustomError({
        code:'NO_COUNTRY_CODE_PROVIDED',
        message:'Please provide a country code, i.e. "de"'
      });
    }
    if (!this._refresh_token){
      throw new CustomError({
        code:'NO_REFRESH_TOKEN_PROVIDED',
        message:'Please provide a refresh token'
      });
    }
  }

  get access_token(){
    return this._access_token;
  }

  get profiles(){
    return this._profiles;
  }

  set country(country_code){
    this._country = country_code;
  }

  _constructRefreshAccessTokenBody(){
    let body = {
      grant_type:'refresh_token',
      refresh_token:this._refresh_token,
      client_id:this._credentials.id,
      client_secret:this._credentials.secret
    };
    return JSON.stringify(body);
  }

  async _validateAccessToken(){
    if (this._options.auto_request_token && !this._access_token){
      await this.refreshAccessToken();
    }
    if (!this._access_token){
      throw new CustomError({
        code:'NO_ACCESS_TOKEN_PRESENT',
        message:'Did you turn off "auto_request_token" and forgot to refresh the access token?'
      });
    }
  }

  async _registerProfiles(){
    let res = await request({
      method:'PUT',
      url:this._constructURL('/v2/profiles/register'),
      headers:this._addHeaders('profiles'),
      body:JSON.stringify({
        countryCode:this._country.toUpperCase()
      })
    });
    let json_res = this._parseBody(res.body);
    if (res.statusCode !== 200){
      // Refresh access_token when expired/invalid and auto_request_token is true
      if (this._options.auto_request_token && res.statusCode === 401 && this._isUnauthorized(json_res)){
        await this.refreshAccessToken();
        return await this._registerProfiles();
      }
      throw new CustomError({
        code:json_res.code,
        message:json_res.details
      });
    }
    if (json_res && json_res.profileId){
      this._profiles[this._country] = {
        profileId:json_res.profileId
      };
    }
  }

  async _validateProfile(){
    if (!this._profiles[this._country]){
      this._options.use_sandbox ? await this._registerProfiles() : await this.setProfiles();
    }
    if (!this._profiles[this._country]){
      throw new CustomError({
        code:'NO_PROFILE_FOUND_FOR_COUNTRY_CODE',
        message:'Could not find a valid profile for the country code: ' + this._country
      });
    }
  }

  _validateMethodAndOperation(method, operation){
    if (!method){
      throw new CustomError({
        code:'NO_METHOD_GIVEN',
        message:'Please provide a HTTP Method to call'
      });
    }
    if (!operation){
      throw new CustomError({
        code:'NO_OPERATION_GIVEN',
        message:'Please provide an operation to call'
      });
    }
    for (let op in operations){
      let temp_op = op;
      for (let param in this._param_regex){
        temp_op = temp_op.replace(param, this._param_regex[param]);
      }
      if (new RegExp('^' + temp_op + '$').test(operation)){
        if (!operations[op].includes(method.toUpperCase())){
          throw new CustomError({
            code:'HTTP_METHOD_INVALID',
            message:'HTTP Method ' + method.toUpperCase() + ' is invalid for operation ' + operation + '. Please provide one of: ' + operations[op].join(',')
          });
        }
        return;
      }
    }
    throw new CustomError({
      code:'OPERATION_INVALID',
      message:'Operation ' + operation + ' invalid'
    });
  }

  _constructURL(operation, query){
    let region_uri_part = '';
    if (this._options.use_sandbox){
      region_uri_part = '-test';
    } else if (/^(eu|fe)$/.test(this._region)){
      region_uri_part = '-' + this._region;
    }
    let uri = 'https://advertising-api' + region_uri_part + '.amazon.com' + operation;
    return query ? uri + '?' + querystring.stringify(query) : uri;
  }

  // Necessary to parse all requests with JSONbig.stringify/_bigIntParse and responses with JSONbig.parse instead of simple JSON.stringify/JSON.parse
  // --> JSON.parse will wrongly round long sponsoredBrands campaign ids
  _bigIntParse(body){
    if (Array.isArray(body)){
      body.forEach((elem, index) => {
        body[index] = this._bigIntParse(elem);
      });
      return body;
    }
    for (let key in body){
      if (this._big_int_keys.includes(key)){
        body[key] = BigInt(body[key]);
      }
    }
    return body;
  }

  _addHeaders(scope){
    let headers = {
      Authorization:'Bearer ' + this._access_token,
      'Amazon-Advertising-API-ClientId':this._credentials.id,
      'Content-Type':'application/json'
    }
    if (scope !== 'profiles'){
      headers['Amazon-Advertising-API-Scope'] = this._profiles[this._country].profileId;
    }
    return headers;
  }

  _createRequest(req_params){
    return {
      method:req_params.method,
      url:this._constructURL(req_params.operation, req_params.query),
      headers:req_params.operation === '/v2/profiles' ? this._addHeaders('profiles') : this._addHeaders(),
      body:req_params.body ? JSONbig.stringify(this._bigIntParse(req_params.body)) : null
    };
  }

  _isUnauthorized(json_res){
    // Different error messages for access_token expired vs. access_token invalid
    return (json_res.message === 'Unauthorized' || (json_res.code === 'UNAUTHORIZED' && json_res.details === 'HTTP 401 Unauthorized'));
  }

  _parseBody(body){
    try {
      return JSONbig.parse(body);
    } catch (e){
      throw new CustomError({
        code:'JSON_PARSE_ERROR',
        message:body
      });
    }
  }

  async _getProfiles(){
    let res = await request({
      method:'GET',
      url:this._constructURL('/v2/profiles'),
      headers:this._addHeaders('profiles')
    });
    let json_res = this._parseBody(res.body);
    if (res.statusCode !== 200){
      // Refresh access_token when expired/invalid and auto_request_token is true
      if (this._options.auto_request_token && res.statusCode === 401 && this._isUnauthorized(json_res)){
        await this.refreshAccessToken();
        return await this._getProfiles();
      }
      throw new CustomError({
        code:json_res.code,
        message:json_res.details
      });
    }
    return json_res;
  }

  async _wait(tries){
    return new Promise((resolve, reject) => {
      let wait_time = 10000;
      if (tries > 20){
        wait_time = 30000;
      } else if (tries > 50){
        wait_time = 60000;
      }
      setTimeout(() => {
        resolve();
      }, 60000);
    })
  }

  async _unzip(buffer){
    return new Promise((resolve, reject) => {
      zlib.gunzip(buffer, (err, unzipped_buffer) => {
        if (err){
          reject(err);
        }
        resolve(unzipped_buffer);
      });
    });
  }

  _validateDownloadSuccess(res){
    if (res.statusCode !== 200){
      let json_res;
      try {
        json_res = xml_parser.parse(res.body);
      } catch(e){
        throw new CustomError({
          code:'DOWNLOAD_ERROR',
          message:res.body
        });
      }
      if (json_res && json_res.Error){
        throw new CustomError({
          code:json_res.Error.Code,
          message:json_res.Error.Message
        });
      } else {
        throw new CustomError({
          code:'DOWNLOAD_ERROR',
          message:json_res
        });
      }
    }
  }

  async _getReportURL(report_id, report_path, tries = 0){
    let res = await this.callAPI({
      method:'GET',
      operation:report_path ? (report_path + report_id) : ('/v2/reports/' + report_id)
    });
    if (res.status === 'SUCCESS' || res.status === 'SUCCESSFUL'){
      return res.location;
    }
    tries++;
    if (this._options.max_retries && tries > this._options.max_retries){
      throw new CustomError({
        code:'REPORT_GENERATION_ERROR',
        message:'API not generating report in time, too many retries (> ' + this._options.max_retries + ' tries)!'
      });
    }
    await this._wait(tries);
    return await this._getReportURL(report_id, report_path, tries);
  }

  async _getReportRedirectURL(report_url){
    let res = await request({
      url:report_url,
      headers:this._addHeaders()
    });
    if (res.statusCode === 307){
      if (res.headers && res.headers.location){
        return res.headers.location;
      }
      throw new CustomError({
        code:'NO_DOWNLOAD_URL_LOCATION_FOUND',
        message:'Report request did not return a valid redirect to final download URL'
      });
    } else {
      let json_res = this._parseBody(res.body);
      // Refresh access_token when expired/invalid and auto_request_token is true
      if (this._options.auto_request_token && res.statusCode === 401 && this._isUnauthorized(json_res)){
        await this.refreshAccessToken();
        return await this._getReportRedirectURL(report_url);
      }
      throw new CustomError({
        code:json_res.code,
        message:json_res.details
      });
    }
  }

  _validateReportParams(req_params){
    if (!req_params.campaignType){
      throw new CustomError({
        code:'NO_CAMPAIGN_TYPE_PROVIDED',
        message:'Please provide a campaignType. Must be one of: ' + Object.keys(reports).join(',')
      });
    }
    if (!reports[req_params.campaignType]){
      throw new CustomError({
        code:'INVALID_CAMPAIGN_TYPE_ERROR',
        message:'Given campaignType ' + req_params.campaignType + ' is not valid. Please specify one of: ' + Object.keys(reports).join(',')
      });
    }
    if (req_params.campaignType !== 'brandMetrics' && !req_params.recordType){
      throw new CustomError({
        code:'NO_RECORD_TYPE_PROVIDED',
        message:'Please provide a recordType'
      });
    }
    if (req_params.campaignType !== 'brandMetrics' && !reports[req_params.campaignType][req_params.recordType]){
      throw new CustomError({
        code:'INVALID_RECORD_TYPE_ERROR',
        message:'Given recordType ' + req_params.recordType + ' is not valid for campaignType. Please specify one of: ' + Object.keys(reports[req_params.campaignType]).join(',')
      });
    }
    if (req_params.campaignType === 'sponsoredProducts' && req_params.recordType === 'asins' && !req_params.body.metrics){
      if (!req_params.metricsType){
        throw new CustomError({
          code:'NO_METRICS_TYPE_PROVIDED',
          message:'Please provide metrics or a metricsType. metricsType be one of: ' + Object.keys(reports[req_params.campaignType][req_params.recordType].metrics).join(',')
        });
      } else if (!reports[req_params.campaignType][req_params.recordType].metrics[req_params.metricsType]){
        throw new CustomError({
          code:'INVALID_METRICS_TYPE_ERROR',
          message:'Given metricsType ' + req_params.recordType + ' is not valid. Please specify one of: ' + Object.keys(reports[req_params.campaignType][req_params.recordType].metrics).join(',')
        });
      }
    }
  }

  _addDefaultMetrics = (req_params) => {
    let record_type_infos = reports[req_params.campaignType][req_params.recordType];
    if (req_params.metricsType){
      return record_type_infos.metrics[req_params.metricsType];
    } else if (req_params.body.segment && record_type_infos.segment && record_type_infos.segment[req_params.body.segment]){
      return record_type_infos.segment[req_params.body.segment].metrics;
    }
    if (record_type_infos){
      return record_type_infos.metrics;
    }
    return;
  }

  async refreshAccessToken(){
    let res = await request({
      method:'POST',
      url:'https://api.amazon.com/auth/o2/token',
      body:this._constructRefreshAccessTokenBody(),
      headers:{
        'Content-Type':'application/json'
      }
    });
    let json_res;
    try {
      json_res = JSON.parse(res.body);
    } catch (e){
      throw new CustomError({
        code:'REFRESH_ACCESS_TOKEN_PARSE_ERROR',
        message:res.body
      });
    }
    if (json_res.access_token){
      this._access_token = json_res.access_token;
    } else if (json_res.error){
      throw new CustomError({
        code:json_res.error,
        message:json_res.error_description
      });
    } else {
      throw new CustomError({
        code:'UNKNOWN_REFRESH_ACCESS_TOKEN_ERROR',
        message:res.body
      });
    }
  }

  async setProfiles(){
    let json_res = await this._getProfiles();
    if (Array.isArray(json_res)){
      if (json_res.length){
        json_res.map((profile) => {
          if (profile.accountInfo.type === 'seller'){
            this._profiles[profile.countryCode.toLowerCase()] = profile;
          }
        });
        return;
      }
      throw new CustomError({
        code:'NO_PROFILES_ERROR',
        message:'Could not find any profiles'
      });
    } else if (json_res.error){
      throw new CustomError({
        code:json_res.error,
        message:json_res.error_description
      });
    } else {
      throw new CustomError({
        code:'UNKNOWN_SET_PROFILES_ERROR',
        message:res.body
      });
    }
  }

  async getReport(req_params){
    req_params.body = req_params.body || {};
    req_params.method = 'POST';
    this._validateReportParams(req_params);
    req_params.operation = req_params.recordType ? reports[req_params.campaignType][req_params.recordType].operation : reports[req_params.campaignType].operation;
    // Set default metrics (all available metrics) if no metrics given
    let metrics = req_params.body.metrics || this._addDefaultMetrics(req_params);
    // Only add metrics to the body if either user passed metrics or default metrics are given
    // --> some reports use all metrics per default so we don't have to specify them as default (i.e. brandMetrics report)
    if (metrics){
      req_params.body.metrics = metrics;
    }
    let res = await this.callAPI(req_params);
    if (res.reportId){
      let report_url = await this._getReportURL(res.reportId, reports[req_params.campaignType].reportPath);
      let redirect_url = await this._getReportRedirectURL(report_url);
      let report = await request({
        url:redirect_url
      });
      this._validateDownloadSuccess(report);
      let buffer = Buffer.concat(report.chunks);
      let unzipped_buffer = await this._unzip(buffer);
      try {
        return JSONbig.parse(unzipped_buffer.toString());
      } catch (e){
        throw new CustomError({
          code:'JSON_PARSE_ERROR',
          message:unzipped_buffer.toString()
        });
      }
    }
    throw new CustomError({
      code:'NO_REPORT_ID_FOUND',
      message:'Report request did not return a reportId'
    });
  }

  async callAPI(req_params, tries = 0){
    this._validateMethodAndOperation(req_params.method, req_params.operation);
    await this._validateAccessToken();
    await this._validateProfile();
    let res = await request(this._createRequest(req_params));
    let json_res = this._parseBody(res.body);
    if (![200, 202, 207].includes(res.statusCode)){
      // Retry if request was rate-limited (429 too many requests) or something went wrong on the server (500 internal error)
      if ([429, 500].includes(res.statusCode) && this._options.auto_request_throttled){
        tries++;
        if (this._options.max_retries && tries > this._options.max_retries){
          throw new CustomError({
            code:'AVAILABILTY_ERROR (' + res.statusCode + ')',
            message:'Could not receive a valid response in time, too many retries (> ' + this._options.max_retries + ' tries)!'
          });
        }
        await this._wait(tries);
        return await this.callAPI(req_params, tries);
      }
      // Refresh access_token when expired/invalid and auto_request_token is true
      if (this._options.auto_request_token && res.statusCode === 401 && this._isUnauthorized(json_res)){
        await this.refreshAccessToken();
        return await this.callAPI(req_params);
      }
      throw new CustomError({
        code:json_res.code,
        message:json_res.details
      });
    }
    return json_res;
  }

};

module.exports = Advertising;