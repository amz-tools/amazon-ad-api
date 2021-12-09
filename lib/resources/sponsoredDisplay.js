module.exports = {
	// Campaigns
	'/sd/campaigns':['POST','PUT','GET'],
	'/sd/campaigns/{campaignId}':['GET','DELETE'],
	'/sd/campaigns/extended':['GET'],
	'/sd/campaigns/extended/{campaignId}':['GET'],
	'/sd/campaigns/{campaignId}/budgetRules/{budgetRuleId}':['DELETE'],
	'/sd/campaigns/{campaignId}/budgetRules/budgetHistory':['GET'],
	'/sd/campaigns/{campaignId}/budgetRules':['POST','GET'],
	// AdGroups
	'/sd/adGroups':['POST','PUT','GET'],
	'/sd/adGroups/{adGroupId}':['GET','DELETE'],
	'/sd/adGroups/extended':['GET'],
	'/sd/adGroups/extended/{adGroupId}':['GET'],
	// ProductAds
	'/sd/productAds':['POST','PUT','GET'],
	'/sd/productAds/{adId}':['GET','DELETE'],
	'/sd/productAds/extended':['GET'],
	'/sd/productAds/extended/{adId}':['GET'],
	// Reports
	'/sd/{recordType}/report':['POST'],
	// Targets
	'/sd/targets':['POST','PUT','GET'],
	'/sd/targets/{targetId}':['GET','DELETE'],
	'/sd/targets/extended':['GET'],
	'/sd/targets/extended/{targetId}':['GET'],
	'/sd/targets/recommendations':['POST'],
	'/sd/targets/bids/recommendations':['POST'],
	// NegativeTargets
	'/sd/negativeTargets':['POST','PUT','GET'],
	'/sd/negativeTargets/{negativeTargetId}':['GET','DELETE'],
	'/sd/negativeTargets/extended':['GET'],
	'/sd/negativeTargets/extended/{negativeTargetId}':['GET'],
	// Snapshot
	'/sd/{recordType}/snapshot':['POST'],
	'/sd/snapshots/{snapshotId}':['GET'],
	'/sd/snapshots/{snapshotId}/download':['GET'],
	// Creatives
	'/sd/creatives':['POST','PUT','GET'],
	'/sd/creatives/preview':['POST'],
	'/sd/moderation/creatives':['GET'],
	// BudgetRules
	'/sd/budgetRules':['POST','PUT','GET'],
	'/sd/budgetRules/{budgetRuleId}':['GET'],
	'/sd/budgetRules/{budgetRuleId}/campaigns':['GET'],
	// BrandSafety
	'/sd/brandSafety/deny':['POST','GET'],
	'/sd/brandSafety/{requestId}/results':['GET'],
	'/sd/brandSafety/{requestId}/status':['GET'],
	'/sd/brandSafety/status':['GET']
};