module.exports = {
  // Campaigns
  "/sb/campaigns": ["POST", "PUT", "GET"],
  "/sb/campaigns/{campaignId}": ["GET", "DELETE"],
  "/sb/campaigns/{campaignId}/budgetRules/{budgetRuleId}": ["DELETE"],
  "/sb/campaigns/{campaignId}/budgetRules/budgetHistory": ["GET"],
  "/sb/campaigns/{campaignId}/budgetRules": ["POST", "GET"],
  "/sb/campaigns/budgetRules/recommendations": ["POST"],
  "/sb/v4/campaigns/list": ["POST"],
  // AdGroups
  "/sb/adGroups": ["GET"],
  "/sb/adGroups/{adGroupId}": ["GET"],
  "/sb/v4/adGroups/list": ["POST"],
  // ProductAds
  "/sb/v4/ads/list": ["POST"],
  // Keywords
  "/sb/keywords": ["POST", "PUT", "GET"],
  "/sb/keywords/{keywordId}": ["GET", "DELETE"],
  // NegativeKeywords
  "/sb/negativeKeywords": ["POST", "PUT", "GET"],
  "/sb/negativeKeywords/{keywordId}": ["GET", "DELETE"],
  // Targets
  "/sb/targets/list": ["POST"],
  "/sb/targets": ["POST", "PUT"],
  "/sb/targets/{targetId}": ["GET", "DELETE"],
  "/sb/targets/categories": ["GET"],
  // NegativeTargets
  "/sb/negativeTargets/list": ["POST"],
  "/sb/negativeTargets": ["POST", "PUT"],
  "/sb/negativeTargets/{targetId}": ["GET", "DELETE"],
  // Recommendations
  "/sb/recommendations/targets/product/list": ["POST"],
  "/sb/recommendations/targets/category": ["POST"],
  "/sb/recommendations/targets/brand": ["POST"],
  "/sb/recommendations/bids": ["POST"],
  "/sb/recommendations/creative/headline": ["POST"],
  "/sb/recommendations/keyword": ["POST"],
  // Drafts
  "/sb/drafts/campaigns": ["POST", "PUT", "GET"],
  "/sb/drafts/campaigns/{draftCampaignId}": ["GET", "DELETE"],
  "/sb/drafts/campaigns/submit": ["POST"],
  // Stores
  "/stores/assets": ["POST", "GET"],
  "/v2/stores": ["GET"],
  "/v2/stores/{brandEntityId}": ["GET"],
  // PageAsins
  "/pageAsins": ["GET"],
  // Media
  "/media/upload": ["POST"],
  "/media/complete": ["PUT"],
  "/media/describe": ["GET"],
  // Brands
  "/brands": ["GET"],
  // Moderation
  "/sb/moderation/campaigns/{campaignId}": ["GET"],
  "/preModeration": ["POST"],
  // BudgetRules
  "/sb/budgetRules": ["POST", "PUT", "GET"],
  "/sb/budgetRules/{budgetRuleId}": ["GET"],
  "/sb/budgetRules/{budgetRuleId}/campaigns": ["GET"],
  // Default
  "/sb/campaign/shopperSegments/forecast": ["POST"],
  // Benchmarks
  "/benchmarks/brands": ["GET"],
  "/benchmarks/brandsAndCategories": ["POST"],
  "/benchmarks/brands/{brandName}/categories/{categoryId}": ["POST"],
  // Reports
  "/v2/hsa/{recordType}/report": ["POST"],
  "/v2/reports/{reportId}": ["GET"],
  "/v2/reports/{reportId}/download": ["GET"],
  // Snapshot
  "/v2/hsa/{recordType}/snapshot": ["POST"],
  "/v2/hsa/snapshots/{snapshotId}": ["GET"]
};
