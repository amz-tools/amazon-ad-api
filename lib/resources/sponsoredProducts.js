module.exports = {
	// Campaigns
	'/v2/sp/campaigns':['POST','PUT','GET'],
	'/v2/sp/campaigns/{campaignId}':['GET','DELETE'],
	'/v2/sp/campaigns/extended':['GET'],
	'/v2/sp/campaigns/extended/{campaignId}':['GET'],
	'/sp/campaigns/{campaignId}/budgetRules/budgetHistory':['GET'],
	'/sp/campaigns/{campaignId}/budgetRules':['POST','GET'],
	'/sp/campaigns/{campaignId}/budgetRules/{budgetRuleId}':['DELETE'],
	'/sp/campaigns/budgetRules/recommendations':['POST'],
	'/sp/campaigns/budgetRecommendations':['POST'],
	// AdGroups
	'/v2/sp/adGroups':['POST','PUT','GET'],
	'/v2/sp/adGroups/{adGroupId}':['GET','DELETE'],
	'/v2/sp/adGroups/extended':['GET'],
	'/v2/sp/adGroups/extended/{adGroupId}':['GET'],
	'/v2/sp/adGroups/{adGroupId}/bidRecommendations':['GET'],
	'/v2/sp/adGroups/{adGroupId}/suggested/keywords':['GET'],
	'/v2/sp/adGroups/{adGroupId}/suggested/keywords/extended':['GET'],
	// Keywords
	'/v2/sp/keywords':['POST','PUT','GET'],
	'/v2/sp/keywords/{keywordId}':['GET','DELETE'],
	'/v2/sp/keywords/extended':['GET'],
	'/v2/sp/keywords/extended/{keywordId}':['GET'],
	'/v2/sp/keywords/{keywordId}/bidRecommendations':['GET'],
	'/v2/sp/keywords/bidRecommendations':['POST'],
	// NegativeKeywords
	'/v2/sp/negativeKeywords':['POST','PUT','GET'],
	'/v2/sp/negativeKeywords/{keywordId}':['GET','DELETE'],
	'/v2/sp/negativeKeywords/extended':['GET'],
	'/v2/sp/negativeKeywords/extended/{keywordId}':['GET'],
	// CampaignNegativeKeywords
	'/v2/sp/campaignNegativeKeywords':['POST','PUT','GET'],
	'/v2/sp/campaignNegativeKeywords/{keywordId}':['GET','DELETE'],
	'/v2/sp/campaignNegativeKeywords/extended':['GET'],
	'/v2/sp/campaignNegativeKeywords/extended/{keywordId}':['GET'],
	// Asins
	'/v2/sp/asins/{asinValue}/suggested/keywords':['GET'],
	'/v2/sp/asins/suggested/keywords':['POST'],
	// ProductAds
	'/v2/sp/productAds':['POST','PUT','GET'],
	'/v2/sp/productAds/{adId}':['GET','DELETE'],
	'/v2/sp/productAds/extended':['GET'],
	'/v2/sp/productAds/extended/{adId}':['GET'],
	// Targets
	'/v2/sp/targets':['POST','PUT','GET'],
	'/v2/sp/targets/{targetId}':['GET','DELETE'],
	'/v2/sp/targets/extended':['GET'],
	'/v2/sp/targets/extended/{targetId}':['GET'],
	'/v2/sp/targets/bidRecommendations':['POST'],
	'/v2/sp/targets/productRecommendations':['POST'],
	'/v2/sp/targets/brands':['GET'],
	'/sp/targets/keywords/recommendations':['POST'],
	'/sp/targets/categories/recommendations':['POST'],
	'/sp/targets/products/count':['POST'],
	'/sp/targets/products/recommendations':['POST'],
	'/sp/targets/categories':['GET'],
	'/sp/targets/category/{categoryId}/refinements':['GET'],
	// NegativeTargets
	'/v2/sp/negativeTargets':['POST','PUT','GET'],
	'/v2/sp/negativeTargets/{targetId}':['GET','DELETE'],
	'/v2/sp/negativeTargets/extended':['GET'],
	'/v2/sp/negativeTargets/extended/{targetId}':['GET'],
	'/sp/negativeTargets/brands/recommendations':['GET'],
	'/sp/negativeTargets/brands/search':['POST'],
	// Reports
	'/v2/sp/{recordType}/report':['POST'],
	'/v2/sp/reports/{reportId}':['GET'],
	'/reporting/reports':['POST',],
	'/reporting/reports/{reportId}':['GET'],
	// Snapshots
	'/v2/sp/{recordType}/snapshot':['POST'],
	'/v2/sp/reports/{snapshotId}':['GET'],
	// BudgetRules
	'/sp/budgetRules':['POST','PUT','GET'],
	'/sp/budgetRules/{budgetRuleId}':['GET'],
	'/sp/budgetRules/{budgetRuleId}/campaigns':['GET'],
	// CampaignOptimization Rules
	'/sp/rules/campaignOptimization':['POST','PUT'],
	'/sp/rules/campaignOptimization/eligibility':['POST'],
	'/sp/rules/campaignOptimization/state':['POST'],
	'/sp/rules/campaignOptimization/{campaignOptimizationId}':['GET','DELETE']
};