# amazon-ad-api (client for the Amazon Advertising API)

The client handles calls to the Amazon Advertising API. It wraps up all the necessary stuff such as auto-requesting access tokens and/or profiles, handling of BigInt issues with IDs and provides convenience methods, i.e. for requesting and downloading reports.

## Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Getting Started](#getting-started)
  * [Setting credentials from environment variables](#setting-credentials-from-environment-variables)
  * [Setting credentials from file](#setting-credentials-from-file)
  * [Setting credentials from constructor config object](#setting-credentials-from-constructor-config-object)
* [Usage](#usage)
  * [Config params](#config-params)
  * [Request access token](#request-access-token)
* [Call the API](#call-the-api)
* [Examples](#examples)
* [Request, download and unzip reports](#request-download-and-unzip-reports)
* [Sandbox mode](#sandbox-mode)
* [Known Issues](#known-issues)
* [Seller Support](#seller-support)

## Prerequisites

Make sure that you followed the [Amazon Ads API Onboarding Process](https://advertising.amazon.com/API/docs/en-us/setting-up/overview), have successfully [retrieved an authorization code](https://advertising.amazon.com/API/docs/en-us/setting-up/step-4-authorization-grant) and used it to [generate a refresh token](https://advertising.amazon.com/API/docs/en-us/get-started/generate-api-tokens).

## Installation
```bash
npm install amazon-ad-api
```

## Getting Started

Before you can use the client you need to add your app client and aws user credentials.

### Setting credentials from environment variables

* `AMAZON_AD_CLIENT_ID`=<YOUR_AD_CLIENT_ID> ([see Amazon Ads API Docs "Create your Login with Amazon Application"](https://advertising.amazon.com/API/docs/en-us/setting-up/step-1-create-lwa-app))
* `AMAZON_AD_CLIENT_SECRET`=<YOUR_AD_CLIENT_SECRET> ([see Amazon Ads API Docs "Create your Login with Amazon Application"](https://advertising.amazon.com/API/docs/en-us/setting-up/step-1-create-lwa-app))

### Setting credentials from file

Instead of setting the credentials via environment variables you may load them from a credentials file. The default path to the file is `~/.amzadapi/credentials` (path can be changed when creating a client) and you add the credentials one per line:
```bash
AMAZON_AD_CLIENT_ID=<YOUR_AD_CLIENT_ID>
AMAZON_AD_CLIENT_SECRET=<YOUR_AD_CLIENT_SECRET>
```

### Setting credentials from constructor config object

Although the most convenient and recommended way of setting the credentials is via environment variables or config file it is also possible to pass the credentials inside the config object when creating an instance of the client (i.e. if you have no means of using env vars or a config file). The structure of the constructor config object will be explained below.

## Usage

Require library:
```javascript
const AdvertisingAPI = require('amazon-ad-api');
```

Create client and call API:
```javascript
(async() => {
  try {
    let advertising = new AdvertisingAPI({
      region:'eu', // The region to use for the AD-API operations ("eu", "na" or "fe"),
      country:'de', // The country code of the marketplace to use for the AD-API operations
      refresh_token:'<REFRESH_TOKEN>' // The refresh token of your app user
    });
    let res = await advertising.callAPI({
      operation:'/v2/profiles',
      method:'GET'
    });
    console.log(res);
  } catch(e){
    console.log(e);
  }
})();
```

### Config params

The class constructor takes a config object with the following structure as input:
```javascript
{
  region:'<REGION>',
  refresh_token:'<REFRESH_TOKEN>',
  access_token:'<ACCESS_TOKEN>',
  credentials:{
    AMAZON_AD_CLIENT_ID:'<AD_CLIENT_ID>',
    AMAZON_AD_CLIENT_SECRET:'<AD_CLIENT_SECRET>'
  },
  options:{
    credentials_path:'~/.amzadapi/credentials',
    auto_request_token:true,
    auto_request_throttled:true,
    max_retries:20,
    use_sandbox:false
  }
}
```
Valid properties of the config object:

| Name | Type | Default | Description |
|:--|:--:|:--:|:--|
| **region**<br>*required* | string | - | The region to use for the AD-API operations.<br>Must be one of: `eu`, `na` or `fe` |
| **country**<br>*required* | string | - | The country code of the marketplace to use for the AD-API operations. |
| **refresh_token**<br>*required* | string | - | The refresh token of the app user. |
| **access_token**<br>*optional* | string | - | The temporary access token requested with the refresh token of the app user. |
| **credentials**<br>*optional* | object | - | The app client id and secret. Must include the two credentials properties `AMAZON_AD_CLIENT_ID` and `AMAZON_AD_CLIENT_SECRET` with their corresponding values.<br>NOTE: Should only be used if you have no means of using environment vars or credentials file! |
| **options**<br>*optional* | object | - | Additional options, see table below for all possible options properties. |

Valid properties of the config options:

| Name | Type | Default | Description |
|:--|:--:|:--:|--|
| **credentials_path**<br>*optional* | string | ~/.amzadapi/credentials | A custom absolute path to your credentials file location. |
| **auto_request_token**<br>*optional* | boolean | true | Whether or not the client should retrieve a new access token if not given or expired. |
| **auto_request_throttled**<br>*optional* | boolean | true | Whether or not the client should automatically retry a request when throttled. |
| **max_retries**<br>*optional* | integer | 20 | How many retries the client should process when waiting for a report to finish or when a request is throttled. Setting this value to 0 will force the client to wait infinitely. |
| **use_sandbox**<br>*optional* | boolean | false | Whether or not to use the sandbox endpoint. |

### Request access token

If you only provide the `region`, `country` and `refresh_token` parameters the client will automatically request `access_token` for you (with a TTL of 1 hour) and reuse the token for future api calls for the class instance.

Instead of having the client handle the `access_token` requests automatically, you may also refresh the token manually:
```javascript
let advertising = new AdvertisingAPI({
  region:'eu',
  country:'de',
  refresh_token:'<REFRESH_TOKEN>',
  options:{
    auto_request_token:false
  }
});
await advertising.refreshAccessToken();
```
If you want to use the same `access_token` for multiple instances you can retrieve the token via getter and use it as input for a new instance:
```javascript
let access_token = advertising.access_token;

let advertisingNewInstance = new AdvertisingAPI({
  region:'eu',
  country:'de',
  refresh_token:'<REFRESH_TOKEN>',
  access_token:access_token
});
```

## Call the API

Calls to the AD-API will be triggered by using the `.callAPI()` function, which takes an object with the following structure as input:
```javascript
{
  operation:'<OPERATION_TO_CALL>',
  method:'<METHOD_TO_USE>',
  query:{
    ...
  },
  body:{
    ...
  }
}
```
Valid properties of the object:

| Name | Type | Default | Description |
|:--|:--:|:--:|:--|
| **operation**<br>*required* | string | - | The operation (api path) you want to request, [see Amazon Advertising API Docs](https://advertising.amazon.com/API/docs/en-us/). |
| **method**<br>*required* | string | - | The HTTP method to use. Must be one of: `GET`, `POST`, `PUT`,`DELETE` or `PATCH`. |
| **query**<br>*optional* | object | - | The input paramaters added to the query string of the operation. |
| **body**<br>*optional* | object | - | The input paramaters added to the body of the operation. |

## Examples

Call the API by passing in the operation (api path) and the HTTP method. See the following examples:
```javascript
let res = await advertising.callAPI({
  operation:'/v2/profiles',
  method:'GET'
});
```
```javascript
let res = await advertising.callAPI({
  operation:'/invoices',
  method:'GET',
  query:{
    count:10,
    invoiceStatuses:['ISSUED','PAID_IN_FULL']
  }
});
```
```javascript
let res = await advertising.callAPI({
  operation:'/v2/sp/keywords',
  method:'POST',
  body:[{
    campaignId:'<CAMPAIGN_ID>',
    adGroupId:'<AD_GROUP_ID>',
    keywordText:'My exact keyword',
    state:'enabled',
    matchType:'exact',
    bid:1.10
  },{
    campaignId:'<CAMPAIGN_ID>',
    adGroupId:'<AD_GROUP_ID>',
    keywordText:'My even better phrase keyword',
    state:'enabled',
    matchType:'phrase',
    bid:0.80
  }]
});
```
```javascript
let res = await advertising.callAPI({
	operation:'/sb/recommendations/bids',
	method:'POST',
	body:{
    campaignId:'<CAMPAIGN_ID>',
    keywords:[{
      keywordText:'headphones',
      matchType:'exact'
    },{
      keywordText:'bluetooth earphones',
      matchType:'exact'
    }],
    adFormat:'productCollection'
	}
});
```
```javascript
let res = await advertising.callAPI({
  operation:'/sd/targets',
  method:'PUT',
  body:[{
    targetId:'<TARGET_ID>',
    bid:1.20
  },{
    targetId:'<TARGET_ID>',
    state:'paused'
  }]
});
```

## Request, download and unzip reports

The `.getReport()` function will request a report, wait for the report to be finished and then download, unzip and return the report.

See the following example:
```javascript
let report = await advertising.getReport({
  campaignType:'sponsoredProducts',
  recordType:'productAds',
  body:{
    reportDate:'20211201'
  }
});
```

Valid properties of the object:

| Name | Type | Default | Description |
|:--|:--:|:--:|:--|
| **campaignType**<br>*required* | string | - | The campaignType of the report you want to request, currently supports `sponsoredProducts`, `sponsoredBrands`, `sponsoredDisplay` and `brandMetrics`. |
| **recordType**<br>*optional* | string | - | The recordType of the report. Depends on the campaignType, but must be one of: `campaigns`, `adGroups`, `productAds`,`keywords` ,`targets`, `asins`. Required for all campaignTypes except `brandMetrics`.|
| **metricsType**<br>*optional* | string | - | Only required if `campaignType` is set to `sponsoredProducts` and `recordType` is set to `asins`. Must be either `keywords` or `targets`. |
| **body**<br>*optional* | object | - | The input paramaters added to the body of the operation. |

NOTE: If you don't provide a list of metrics inside the body, the client will automatically default to include ALL valid metrics for the specific report.


## Seller Support

If you are selling on the european market we might be able to support you with everything else that can't be done with the API. Feel free to visit us at [https://amz.tools](https://amz.tools).
