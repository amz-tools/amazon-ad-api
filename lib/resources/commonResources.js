module.exports = {
 	// Profiles
	'/v2/profiles':['PUT','GET'],
	'/v2/profiles/{profileId}':['GET'],
	'/v2/profiles/register':['PUT'],
	'/v2/profiles/registerBrand':['PUT'],
	// ManagerAccounts
	'/managerAccounts':['POST','GET'],
	'/managerAccounts/{managerAccountId}/associate':['POST'],
	'/managerAccounts/{managerAccountId}/disassociate':['POST'],
	// Portfolios
	'/v2/portfolios':['POST','PUT','GET'],
	'/v2/portfolios/extended':['GET'],
	'/v2/portfolios/{portfolioId}':['GET'],
	'/v2/portfolios/extended/{portfolioId}':['GET'],
	// Billing
	'/billing/statuses':['POST'],
	'/billing/notifications':['POST'],
	// Invoices
	'/invoices':['GET'],
	'/invoices/{invoiceId}':['GET'],
	// Audiences
	'/audiences/list':['POST'],
	'/audiences/taxonomy/list':['POST'],
	// CreativeAssets
	'/assets/':['GET'],
	'/assets/register':['POST'],
	'/assets/upload':['POST'],
	'/assets/search/':['POST'],
	// History
	'/history':['POST'],
	// Eligibility
	'/eligibility/product/list':['POST'],
	// Insights
	'/insights/audiences/{audienceId}/overlappingAudiences':['GET'],
	// Localization
	'/currencies/localize':['POST'],
	'/products/localize':['POST'],
	'/keywords/localize':['POST'],
	'/targetingExpression/localize':['POST'],
	// ProductSelector
	'/product/metadata':['POST']
};