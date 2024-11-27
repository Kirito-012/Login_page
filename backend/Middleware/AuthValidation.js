const Joi = require('joi')
const signupValidation = (req, res, next) => {
	const Schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required().min(3),
	})
	const {error} = Schema.validate(req.body)
	if (error) return res.status(400).json({message: 'Bad request', error})
	next()
}

const loginValidation = (req, res, next) => {
	const Schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().required().min(3),
	})
	const {error} = Schema.validate(req.body)
	if (error) return res.status(400).json({message: 'Bad request', error})
	next()
}

module.exports = {loginValidation, signupValidation}
