const { HttpError } = require('@terrajs/mono')
const { getFindOptions } = require('mono-mongodb')

const Expressions = require('./expressions.service')

exports.createExpression = async (req, res) => {
	const expression = await Expressions.create(req.body)

	res.json(expression)
}

exports.listExpressions = async (req, res) => {
	console.log(req.query)
	const options = getFindOptions(req.query)
	const expressions = await Expressions.find({}, options).toArray()
	console.log(expressions.length)
	res.json(expressions)
}

exports.getExpression = async (req, res) => {
	const expression = await Expressions.get(req.params.id)

	if (!expression) throw new HttpError('expression-not-found', 404)

	res.json(expression)
}

exports.updateExpression = async (req, res) => {
	const expression = await Expressions.update(req.params.id, req.body)

	if (!expression) throw new HttpError('expression-not-found', 404)

	res.json(expression)
}

exports.deleteExpression = async (req, res) => {
	const expressionDeleted = await Expressions.delete(req.params.id)

	if (!expressionDeleted) throw new HttpError('expression-not-found', 404)

	res.sendStatus(200)
}

exports.listExpressionsCategory = async (req, res) => {
	console.log("LIST EXPRESSIONS CAtEGORY")
	const category = req.params.category;
	const options = getFindOptions(req.query)
	const expressions = await Expressions.find({category: category}, options).toArray()

	res.json(expressions)
}
