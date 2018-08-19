/*
** See https://terrajs.org/mono/routes#validation
*/
const Joi = require('joi') // joi is a dependency of mono
const { findValidation } = require('mono-mongodb') // See https://github.com/terrajs/mono-mongodb#utils

exports.createExpression = {
	body: Joi.object().keys({
		title: Joi.string().min(1).required()
	})
}

exports.listExpressions = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	}),
	query: Joi.object().keys(findValidation)
}

exports.getExpression = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	})
}

exports.updateExpression = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	}),
	body: Joi.object().keys({
		title: Joi.string().min(1).required()
	})
}

exports.deleteExpression = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	})
}

exports.listExpressionsCategory = {
	// params: Joi.object().keys({
	// 	id: Joi.string().length(24).alphanum()
	// }),
	// query: Joi.object().keys(findValidation)
}
