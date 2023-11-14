module.exports = {
  sponsoredProducts: {
    campaigns: {
      operation: "/reporting/reports",
      metrics:
        "campaignBudgetAmount,campaignBudgetType,campaignBudgetCurrencyCode,campaignRuleBasedBudgetAmount,campaignApplicableBudgetRuleId,campaignApplicableBudgetRuleName,campaignId,campaignName,campaignStatus,impressions,clicks,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,date,campaignBiddingStrategy,costPerClick,clickThroughRate,spend",
      segment: {
        placement: {
          metrics:
            "campaignBudgetAmount,campaignBudgetType,campaignBudgetCurrencyCode,campaignRuleBasedBudgetAmount,campaignApplicableBudgetRuleId,campaignApplicableBudgetRuleName,campaignId,campaignName,campaignStatus,impressions,clicks,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,date,campaignBiddingStrategy,costPerClick,clickThroughRate,spend,placementClassification"
        }
      }
    },
    // campaigns:{
    // 	operation:'/v2/sp/campaigns/report',
    // 	metrics:'applicableBudgetRuleId,applicableBudgetRuleName,attributedConversions14d,attributedConversions14dSameSKU,attributedConversions1d,attributedConversions1dSameSKU,attributedConversions30d,attributedConversions30dSameSKU,attributedConversions7d,attributedConversions7dSameSKU,attributedSales14d,attributedSales14dSameSKU,attributedSales1d,attributedSales1dSameSKU,attributedSales30d,attributedSales30dSameSKU,attributedSales7d,attributedSales7dSameSKU,attributedUnitsOrdered14d,attributedUnitsOrdered14dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered1dSameSKU,attributedUnitsOrdered30d,attributedUnitsOrdered30dSameSKU,attributedUnitsOrdered7d,attributedUnitsOrdered7dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignRuleBasedBudget,campaignStatus,clicks,cost,currency,impressions'
    // },
    adGroups: {
      operation: "/reporting/reports",
      metrics:
        "adGroupName,adGroupId,adStatus,campaignBudgetAmount,campaignBudgetType,campaignBudgetCurrencyCode,campaignRuleBasedBudgetAmount,campaignApplicableBudgetRuleId,campaignApplicableBudgetRuleName,campaignId,campaignName,campaignStatus,impressions,clicks,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,date,campaignBiddingStrategy,costPerClick,clickThroughRate,spend"
    },
    // adGroups:{
    // 	operation:'/v2/sp/adGroups/report',
    // 	metrics:'adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedConversions1d,attributedConversions1dSameSKU,attributedConversions30d,attributedConversions30dSameSKU,attributedConversions7d,attributedConversions7dSameSKU,attributedSales14d,attributedSales14dSameSKU,attributedSales1d,attributedSales1dSameSKU,attributedSales30d,attributedSales30dSameSKU,attributedSales7d,attributedSales7dSameSKU,attributedUnitsOrdered14d,attributedUnitsOrdered14dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered1dSameSKU,attributedUnitsOrdered30d,attributedUnitsOrdered30dSameSKU,attributedUnitsOrdered7d,attributedUnitsOrdered7dSameSKU,campaignId,campaignName,clicks,cost,currency,impressions'
    // },
    keywords: {
      operation: "/reporting/reports",
      metrics:
        "adKeywordStatus,impressions,clicks,costPerClick,clickThroughRate,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,salesOtherSku7d,unitsSoldOtherSku7d,acosClicks7d,acosClicks14d,roasClicks7d,roasClicks14d,keywordId,keyword,campaignBudgetCurrencyCode,date,portfolioId,campaignName,campaignId,campaignBudgetType,campaignBudgetAmount,campaignStatus,keywordBid,adGroupName,adGroupId,keywordType,matchType,targeting",
      segment: {
        query: {
          metrics:
            "adKeywordStatus,impressions,clicks,costPerClick,clickThroughRate,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,salesOtherSku7d,unitsSoldOtherSku7d,acosClicks7d,acosClicks14d,roasClicks7d,roasClicks14d,keywordId,keyword,campaignBudgetCurrencyCode,date,portfolioId,campaignName,campaignId,campaignBudgetType,campaignBudgetAmount,campaignStatus,keywordBid,adGroupName,adGroupId,keywordType,matchType,targeting,searchTerm"
        }
      }
    },
    // keywords:{
    // 	operation:'/v2/sp/keywords/report',
    // 	metrics:'campaignName,campaignId,adGroupName,adGroupId,keywordId,keywordText,keywordStatus,matchType,impressions,clicks,cost,currency,attributedConversions1d,attributedConversions7d,attributedConversions14d,attributedConversions30d,attributedConversions1dSameSKU,attributedConversions7dSameSKU,attributedConversions14dSameSKU,attributedConversions30dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,attributedSales1d,attributedSales7d,attributedSales14d,attributedSales30d,attributedSales1dSameSKU,attributedSales7dSameSKU,attributedSales14dSameSKU,attributedSales30dSameSKU,attributedUnitsOrdered1dSameSKU,attributedUnitsOrdered7dSameSKU,attributedUnitsOrdered14dSameSKU,attributedUnitsOrdered30dSameSKU'
    // },
    productAds: {
      operation: "/reporting/reports",
      metrics:
        "date,campaignName,campaignId,adGroupName,adGroupId,adId,portfolioId,impressions,clicks,costPerClick,clickThroughRate,cost,spend,campaignBudgetCurrencyCode,campaignBudgetAmount,campaignBudgetType,campaignStatus,advertisedAsin,advertisedSku,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,salesOtherSku7d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,unitsSoldOtherSku7d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,acosClicks7d,acosClicks14d,roasClicks7d,roasClicks14d"
    },
    // productAds:{
    // 	operation:'/v2/sp/productAds/report',
    // 	metrics:'campaignName,campaignId,adGroupName,adGroupId,impressions,clicks,cost,currency,asin,sku,campaignBudget,campaignBudgetType,attributedConversions1d,attributedConversions7d,attributedConversions14d,attributedConversions30d,attributedConversions1dSameSKU,attributedConversions7dSameSKU,attributedConversions14dSameSKU,attributedConversions30dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,attributedSales1d,attributedSales7d,attributedSales14d,attributedSales30d,attributedSales1dSameSKU,attributedSales7dSameSKU,attributedSales14dSameSKU,attributedSales30dSameSKU,attributedUnitsOrdered1dSameSKU,attributedUnitsOrdered7dSameSKU,attributedUnitsOrdered14dSameSKU,attributedUnitsOrdered30dSameSKU'
    // },
    asins: {
      operation: "/reporting/reports",
      metrics: {
        keywords:
          "date,portfolioId,campaignName,campaignId,adGroupName,adGroupId,keywordId,keyword,keywordType,advertisedAsin,purchasedAsin,advertisedSku,campaignBudgetCurrencyCode,matchType,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,purchases1d,purchases7d,purchases14d,purchases30d,unitsSoldOtherSku1d,unitsSoldOtherSku7d,unitsSoldOtherSku14d,unitsSoldOtherSku30d,salesOtherSku1d,salesOtherSku7d,salesOtherSku14d,salesOtherSku30d,purchasesOtherSku1d,purchasesOtherSku7d,purchasesOtherSku14d,purchasesOtherSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d",
        targets:
          "date,portfolioId,campaignName,campaignId,adGroupName,adGroupId,keywordId,keyword,keywordType,advertisedAsin,purchasedAsin,advertisedSku,campaignBudgetCurrencyCode,matchType,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,purchases1d,purchases7d,purchases14d,purchases30d,unitsSoldOtherSku1d,unitsSoldOtherSku7d,unitsSoldOtherSku14d,unitsSoldOtherSku30d,salesOtherSku1d,salesOtherSku7d,salesOtherSku14d,salesOtherSku30d,purchasesOtherSku1d,purchasesOtherSku7d,purchasesOtherSku14d,purchasesOtherSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,targeting"
      }
    },
    // asins:{
    // 	operation:'/v2/sp/asins/report',
    // 	metrics:{
    // 		keywords:'campaignName,campaignId,adGroupName,adGroupId,keywordId,keywordText,matchType,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,asin,otherAsin,sku,currency,attributedUnitsOrdered1dOtherSKU,attributedUnitsOrdered7dOtherSKU,attributedUnitsOrdered14dOtherSKU,attributedUnitsOrdered30dOtherSKU,attributedSales1dOtherSKU,attributedSales7dOtherSKU,attributedSales14dOtherSKU,attributedSales30dOtherSKU',
    // 		targets:'campaignName,campaignId,adGroupName,adGroupId,targetId,targetingText,targetingType,targetingExpression,matchType,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,asin,otherAsin,sku,currency,attributedUnitsOrdered1dOtherSKU,attributedUnitsOrdered7dOtherSKU,attributedUnitsOrdered14dOtherSKU,attributedUnitsOrdered30dOtherSKU,attributedSales1dOtherSKU,attributedSales7dOtherSKU,attributedSales14dOtherSKU,attributedSales30dOtherSKU'
    // 	}
    // },
    targets: {
      operation: "/reporting/reports",
      metrics:
        "impressions,clicks,costPerClick,clickThroughRate,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,salesOtherSku7d,unitsSoldOtherSku7d,acosClicks7d,acosClicks14d,roasClicks7d,roasClicks14d,keywordId,keyword,campaignBudgetCurrencyCode,date,portfolioId,campaignName,campaignId,campaignBudgetType,campaignBudgetAmount,campaignStatus,keywordBid,adGroupName,adGroupId,keywordType,matchType,targeting",
      segment: {
        query: {
          metrics:
            "adKeywordStatus,impressions,clicks,costPerClick,clickThroughRate,cost,purchases1d,purchases7d,purchases14d,purchases30d,purchasesSameSku1d,purchasesSameSku7d,purchasesSameSku14d,purchasesSameSku30d,unitsSoldClicks1d,unitsSoldClicks7d,unitsSoldClicks14d,unitsSoldClicks30d,sales1d,sales7d,sales14d,sales30d,attributedSalesSameSku1d,attributedSalesSameSku7d,attributedSalesSameSku14d,attributedSalesSameSku30d,unitsSoldSameSku1d,unitsSoldSameSku7d,unitsSoldSameSku14d,unitsSoldSameSku30d,kindleEditionNormalizedPagesRead14d,kindleEditionNormalizedPagesRoyalties14d,salesOtherSku7d,unitsSoldOtherSku7d,acosClicks7d,acosClicks14d,roasClicks7d,roasClicks14d,keywordId,keyword,campaignBudgetCurrencyCode,date,portfolioId,campaignName,campaignId,campaignBudgetType,campaignBudgetAmount,campaignStatus,keywordBid,adGroupName,adGroupId,keywordType,matchType,targeting,searchTerm"
        }
      }
    }
    // targets:{
    // 	operation:'/v2/sp/targets/report',
    // 	metrics:'campaignName,campaignId,adGroupName,adGroupId,targetId,targetingExpression,targetingText,targetingType,impressions,clicks,cost,attributedConversions1d,attributedConversions7d,attributedConversions14d,attributedConversions30d,attributedConversions1dSameSKU,attributedConversions7dSameSKU,attributedConversions14dSameSKU,attributedConversions30dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,attributedSales1d,attributedSales7d,attributedSales14d,attributedSales30d,attributedSales1dSameSKU,attributedSales7dSameSKU,attributedSales14dSameSKU,attributedSales30dSameSKU,attributedUnitsOrdered1dSameSKU,attributedUnitsOrdered7dSameSKU,attributedUnitsOrdered14dSameSKU,attributedUnitsOrdered30dSameSKU'
    // }
  },
  sponsoredBrands: {
    campaigns: {
      operation: "/reporting/reports",
      metrics:
        "campaignName,campaignId,campaignStatus,impressions,clicks,cost,date,brandedSearches,purchases,purchasesPromoted,detailPageViews,newToBrandPurchasesRate,newToBrandPurchases,newToBrandPurchasesPercentage,sales,salesPromoted,newToBrandSales,newToBrandSalesPercentage,newToBrandUnitsSold,newToBrandUnitsSoldPercentage,unitsSold,viewClickThroughRate,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,viewabilityRate,brandedSearchesClicks,purchasesClicks,detailPageViewsClicks,newToBrandPurchasesClicks,salesClicks,newToBrandSalesClicks,newToBrandUnitsSoldClicks,unitsSoldClicks,costType,campaignBudgetAmount,campaignRuleBasedBudgetAmount,campaignBudgetCurrencyCode,campaignBudgetType,topOfSearchImpressionShare,newToBrandDetailPageViews,newToBrandDetailPageViewsClicks,newToBrandDetailPageViewRate,newToBrandECPDetailPageView,addToCart,addToCartClicks,addToCartRate,eCPAddToCart",
      segment: {
        placement: {
          metrics:
            "campaignName,campaignId,campaignStatus,impressions,clicks,cost,date,brandedSearches,purchases,purchasesPromoted,detailPageViews,newToBrandPurchasesRate,newToBrandPurchases,newToBrandPurchasesPercentage,sales,salesPromoted,newToBrandSales,newToBrandSalesPercentage,newToBrandUnitsSold,newToBrandUnitsSoldPercentage,unitsSold,viewClickThroughRate,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,viewabilityRate,brandedSearchesClicks,purchasesClicks,detailPageViewsClicks,newToBrandPurchasesClicks,salesClicks,newToBrandSalesClicks,newToBrandUnitsSoldClicks,unitsSoldClicks,costType,campaignBudgetAmount,campaignBudgetCurrencyCode,campaignBudgetType,placementClassification,newToBrandDetailPageViews,newToBrandDetailPageViewsClicks,newToBrandDetailPageViewRate,newToBrandECPDetailPageView,addToCart,addToCartClicks,addToCartRate,eCPAddToCart"
        }
      }
      // metrics:
      //   "campaignName,campaignId,campaignStatus,impressions,clicks,cost,date"
      // metrics: {
      //   hsa: "applicableBudgetRuleId,applicableBudgetRuleName,attributedConversions14d,attributedConversions14dSameSKU,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSales14d,attributedSales14dSameSKU,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignRuleBasedBudget,campaignStatus,clicks,cost,dpv14d,impressions,unitsSold14d,attributedBrandedSearches14d",
      //   video:
      //     "attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignStatus,clicks,cost,dpv14d,impressions,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,attributedBrandedSearches14d"
      // }
    }
  },
  // sponsoredBrands: {
  //   campaigns: {
  //     operation: "/v2/hsa/campaigns/report",
  //     metrics: {
  //       hsa: "applicableBudgetRuleId,applicableBudgetRuleName,attributedConversions14d,attributedConversions14dSameSKU,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSales14d,attributedSales14dSameSKU,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignRuleBasedBudget,campaignStatus,clicks,cost,dpv14d,impressions,unitsSold14d,attributedBrandedSearches14d",
  //       video:
  //         "attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignStatus,clicks,cost,dpv14d,impressions,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,attributedBrandedSearches14d"
  //     }
  //   },
  //   adGroups: {
  //     operation: "/v2/hsa/adGroups/report",
  //     metrics: {
  //       hsa: "adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSales14d,attributedSales14dSameSKU,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,campaignId,campaignName,clicks,cost,dpv14d,impressions,unitsSold14d,attributedBrandedSearches14d",
  //       video:
  //         "adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignId,campaignName,clicks,cost,impressions,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,attributedBrandedSearches14d"
  //     }
  //   },
  //   ads: {
  //     operation: "/v2/hsa/ads/report",
  //     metrics: {
  //       hsa: "applicableBudgetRuleId,applicableBudgetRuleName,attributedConversions14d,attributedConversions14dSameSKU,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSales14d,attributedSales14dSameSKU,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignRuleBasedBudget,campaignStatus,clicks,cost,dpv14d,impressions,unitsSold14d,attributedBrandedSearches14d",
  //       video:
  //         "attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignStatus,clicks,cost,dpv14d,impressions,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,attributedBrandedSearches14d"
  //     }
  //   },
  //   targets: {
  //     operation: "/v2/hsa/targets/report",
  //     metrics: {
  //       hsa: "campaignName,campaignId,campaignStatus,campaignBudget,campaignBudgetType,adGroupName,adGroupId,targetId,targetingExpression,targetingText,targetingType,impressions,clicks,cost,attributedDetailPageViewsClicks14d,attributedSales14d,attributedSales14dSameSKU,attributedConversions14d,attributedConversions14dSameSKU,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedOrderRateNewToBrand14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,unitsSold14d,dpv14d",
  //       video:
  //         "adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignStatus,clicks,cost,impressions,targetId,targetingExpression,targetingText,targetingType,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d"
  //     }
  //   },
  //   keywords: {
  //     operation: "/v2/hsa/keywords/report",
  //     metrics: {
  //       hsa: "campaignName,campaignId,campaignStatus,campaignBudget,campaignBudgetType,campaignRuleBasedBudget,applicableBudgetRuleId,applicableBudgetRuleName,adGroupName,adGroupId,keywordText,keywordBid,keywordStatus,matchType,impressions,clicks,cost,attributedDetailPageViewsClicks14d,attributedSales14d,attributedSales14dSameSKU,attributedConversions14d,attributedConversions14dSameSKU,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedOrderRateNewToBrand14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d,unitsSold14d,dpv14d",
  //       video:
  //         "adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedSales14d,attributedSales14dSameSKU,campaignBudget,campaignBudgetType,campaignId,campaignName,campaignStatus,clicks,cost,impressions,keywordBid,keywordId,keywordStatus,keywordText,matchType,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr,dpv14d,attributedDetailPageViewsClicks14d,attributedOrderRateNewToBrand14d,attributedOrdersNewToBrand14d,attributedOrdersNewToBrandPercentage14d,attributedSalesNewToBrand14d,attributedSalesNewToBrandPercentage14d,attributedUnitsOrderedNewToBrand14d,attributedUnitsOrderedNewToBrandPercentage14d"
  //     },
  //     segment: {
  //       query: {
  //         metrics: {
  //           hsa: "campaignName,campaignId,campaignStatus,campaignBudget,campaignBudgetType,adGroupName,adGroupId,keywordText,keywordBid,keywordStatus,searchTermImpressionRank,searchTermImpressionShare,matchType,impressions,clicks,cost,attributedSales14d,attributedConversions14d",
  //           video:
  //             "adGroupId,adGroupName,attributedConversions14d,attributedSales14d,campaignId,campaignName,campaignBudget,campaignBudgetType,campaignStatus,clicks,cost,impressions,keywordBid,keywordId,keywordStatus,keywordText,matchType,vctr,video5SecondViewRate,video5SecondViews,videoCompleteViews,videoFirstQuartileViews,videoMidpointViews,videoThirdQuartileViews,videoUnmutes,viewableImpressions,vtr"
  //         }
  //       }
  //     }
  //   }
  // },
  sponsoredDisplay: {
    campaigns: {
      operation: "/sd/campaigns/report",
      metrics:
        "attributedConversions14d,attributedConversions14dSameSKU,attributedConversions1d,attributedConversions1dSameSKU,attributedConversions30d,attributedConversions30dSameSKU,attributedConversions7d,attributedConversions7dSameSKU,attributedDetailPageView14d,attributedOrdersNewToBrand14d,attributedSales14d,attributedSales14dSameSKU,attributedSales1d,attributedSales1dSameSKU,attributedSales30d,attributedSales30dSameSKU,attributedSales7d,attributedSales7dSameSKU,attributedSalesNewToBrand14d,attributedUnitsOrdered14d,attributedUnitsOrdered1d,attributedUnitsOrdered30d,attributedUnitsOrdered7d,attributedUnitsOrderedNewToBrand14d,campaignBudget,campaignId,campaignName,campaignStatus,clicks,cost,costType,currency,impressions,viewAttributedConversions14d,viewAttributedDetailPageView14d,viewAttributedSales14d,viewAttributedUnitsOrdered14d,viewImpressions,viewAttributedOrdersNewToBrand14d,viewAttributedSalesNewToBrand14d,viewAttributedUnitsOrderedNewToBrand14d,attributedBrandedSearches14d,viewAttributedBrandedSearches14d"
    },
    adGroups: {
      operation: "/sd/adGroups/report",
      metrics:
        "adGroupId,adGroupName,attributedConversions14d,attributedConversions14dSameSKU,attributedConversions1d,attributedConversions1dSameSKU,attributedConversions30d,attributedConversions30dSameSKU,attributedConversions7d,attributedConversions7dSameSKU,attributedDetailPageView14d,attributedOrdersNewToBrand14d,attributedSales14d,attributedSales14dSameSKU,attributedSales1d,attributedSales1dSameSKU,attributedSales30d,attributedSales30dSameSKU,attributedSales7d,attributedSales7dSameSKU,attributedUnitsOrdered14d,attributedUnitsOrdered1d,attributedUnitsOrdered30d,attributedUnitsOrdered7d,attributedUnitsOrderedNewToBrand14d,bidOptimization,campaignId,campaignName,clicks,cost,currency,impressions,viewAttributedConversions14d,viewAttributedDetailPageView14d,viewAttributedSales14d,viewAttributedUnitsOrdered14d,viewImpressions,viewAttributedOrdersNewToBrand14d,viewAttributedSalesNewToBrand14d,viewAttributedUnitsOrderedNewToBrand14d,attributedBrandedSearches14d,viewAttributedBrandedSearches14d"
    },
    productAds: {
      operation: "/sd/productAds/report",
      metrics:
        "campaignName,campaignId,adGroupName,adGroupId,asin,sku,adId,impressions,clicks,cost,currency,attributedConversions7d,attributedConversions14d,attributedConversions30d,attributedConversions1dSameSKU,attributedConversions7dSameSKU,attributedConversions14dSameSKU,attributedConversions30dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,attributedSales1d,attributedSales7d,attributedSales14d,attributedSales30d,attributedSales1dSameSKU,attributedSales7dSameSKU,attributedSales14dSameSKU,attributedSales30dSameSKU,attributedOrdersNewToBrand14d,attributedSalesNewToBrand14d,attributedUnitsOrderedNewToBrand14d,viewImpressions,viewAttributedConversions14d,viewAttributedSales14d,viewAttributedUnitsOrdered14d,attributedDetailPageView14d,viewAttributedDetailPageView14d,attributedBrandedSearches14d,viewAttributedBrandedSearches14d"
    },
    targets: {
      operation: "/sd/targets/report",
      metrics:
        "campaignName,campaignId,adGroupName,adGroupId,targetId,targetingExpression,targetingText,targetingType,impressions,clicks,cost,currency,attributedConversions7d,attributedConversions14d,attributedConversions30d,attributedConversions1dSameSKU,attributedConversions7dSameSKU,attributedConversions14dSameSKU,attributedConversions30dSameSKU,attributedUnitsOrdered1d,attributedUnitsOrdered7d,attributedUnitsOrdered14d,attributedUnitsOrdered30d,attributedSales1d,attributedSales7d,attributedSales14d,attributedSales30d,attributedSales1dSameSKU,attributedSales7dSameSKU,attributedSales14dSameSKU,attributedSales30dSameSKU,attributedOrdersNewToBrand14d,attributedSalesNewToBrand14d,attributedUnitsOrderedNewToBrand14d,viewImpressions,viewAttributedConversions14d,viewAttributedSales14d,viewAttributedUnitsOrdered14d,attributedDetailPageView14d,viewAttributedDetailPageView14d,attributedBrandedSearches14d,viewAttributedBrandedSearches14d"
    },
    asins: {
      operation: "/sd/asins/report",
      metrics:
        "campaignName,campaignId,adGroupName,adGroupId,asin,otherAsin,sku,currency,attributedUnitsOrdered1dOtherSKU,attributedUnitsOrdered7dOtherSKU,attributedUnitsOrdered14dOtherSKU,attributedUnitsOrdered30dOtherSKU,attributedSales1dOtherSKU,attributedSales7dOtherSKU,attributedSales14dOtherSKU,attributedSales30dOtherSKU"
    }
  },
  brandMetrics: {
    operation: "/insights/brandMetrics/report",
    reportPath: "/insights/brandMetrics/report/"
  }
};
