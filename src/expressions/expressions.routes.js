const expressionsValidation = require('./expressions.validation')
const expressionsCtrl = require('./expressions.controller')

module.exports = [
	{
		method: 'POST',
		path: '/expressions',
		validation: expressionsValidation.createExpression,
		handler: expressionsCtrl.createExpression
	},
	{
		method: 'GET',
		path: '/expressions',
		validation: expressionsValidation.listExpressions,
		handler: expressionsCtrl.listExpressions
	},
	{
		method: 'GET',
		path: '/expressions/:id',
		validation: expressionsValidation.getExpression,
		handler: expressionsCtrl.getExpression
	},
	{
		method: 'PUT',
		path: '/expressions/:id',
		validation: expressionsValidation.updateExpression,
		handler: expressionsCtrl.updateExpression
	},
	{
		method: 'DELETE',
		path: '/expressions/:id',
		validation: expressionsValidation.deleteExpression,
		handler: expressionsCtrl.deleteExpression
	},
	{
		method: 'GET',
		path: '/expressions/list/:category',
		validation: expressionsValidation.listExpressionsCategory,
		handler: expressionsCtrl.listExpressionsCategory
	}
]
