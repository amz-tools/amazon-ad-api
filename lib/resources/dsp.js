module.exports = {
 	// Order
	'/dsp/orders':['POST','PUT','GET'],
	'/dsp/orders/{orderId}':['GET'],
	'/dsp/orders/{orderId}/deliveryActivationStatus':['POST'],
	'/dsp/orders/{orderId}/conversionTracking':['PUT','GET'],
	'/dsp/orders/{orderId}/conversionTracking/products':['PUT','GET'],
	'/dsp/orders/{orderId}/conversionTracking/products/export':['GET'],
	'/dsp/orders/{orderId}/conversionTracking/pixels':['PUT','GET'],
	// LineItem
	'/dsp/lineItems/':['POST','PUT','GET'],
	'/dsp/lineItems/{lineItemId}':['GET'],
	'/dsp/lineItems/{lineItemId}/deliveryActivationStatus':['POST'],
	// Creative
	'/dsp/creatives/':['GET'],
	// ImageCreative
	'/dsp/creatives/image':['POST','PUT','GET'],
	'/dsp/creatives/image/preview':['POST'],
	// ResponsiveEcommerceCreative
	'/dsp/creatives/rec':['POST','PUT','GET'],
	'/dsp/creatives/rec/preview':['POST'],
	// Moderation
	'/dsp/moderation/creatives':['GET'],
	// LineItemCreativeAssociation
	'/dsp/lineItemCreativeAssociations':['POST','PUT','GET'],
	// Discovery
	'/dsp/pixels':['GET'],
	'/dsp/productCategories':['GET'],
	'/dsp/supplySources':['GET'],
	'/dsp/domainLists':['GET'],
	'/dsp/geoLocations':['GET'],
	'/dsp/iabContentCategories':['GET'],
	'/dsp/preBidTargeting/doubleVerify/customContextualSegments':['GET'],
	'/dsp/preBidTargeting/oracleDataCloud/customPredicts':['GET'],
	'/dsp/goalConfigurations':['GET'],
	'/dsp/apps':['GET'],
	// FileUploads
	'/dsp/fileUploads/policy/':['GET'],
	// Measurement
	'/measurement/vendorProducts/list':['POST'],
	'/measurement/studies':['DELETE'],
	'/measurement/vendorProducts/surveyQuestionTemplates':['GET'],
	'/measurement/vendorProducts/policies':['GET'],
	'/dsp/measurement/studies/brandLift':['POST','PUT','GET'],
	'/dsp/measurement/eligibility/brandLift':['POST'],
	'/measurement/studies/surveys':['POST','PUT','GET'],
	'/measurement/studies/brandLift/{studyId}/result':['GET'],
	// Reports
	'/dsp/reports':['POST'],
	'/dsp/reports/{reportId}':['GET'],
	// Advertiser
	'/dsp/advertisers/{advertiserId}':['GET'],
	'/dsp/advertisers':['GET']
};