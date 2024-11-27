const userModel = require('../Models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
	try {
		const {email, password} = req.body
		const user = await userModel.findOne({email})
		if (!user)
			return res.status(403).json({message: 'Sign Up first!', success: false})

		const isPassEqual = await bcrypt.compare(password, user.password)
		if (!isPassEqual)
			return res
				.status(403)
				.json({message: `Invalid Username or password`, success: false})

		const jwtToken = jwt.sign(
			{email: user.email, _id: user._id},
			process.env.SECRET_KEY,
			{expiresIn: '24h'}
		)
		res.status(200).json({
			message: 'Login Successfully',
			jwtToken,
			name: user.name,
			success: true,
			email,
		})
	} catch (error) {
		res.status(500).json({message: 'Internal Servor Error', success: false})
	}
}
const signup = async (req, res) => {
	try {
		const {name, email, password} = req.body
		const user = await userModel.findOne({email})
		if (user)
			return res
				.status(409)
				.json({message: 'User already exist', success: false})

		const UserModel = userModel({name, email, password})
		UserModel.password = await bcrypt.hash(password, 10)
		await UserModel.save()
		res.status(200).json({message: 'Signup Successfully', success: true})
	} catch (error) {
		res.status(500).json({message: 'Internal Servor Error', success: false})
	}
}

module.exports = {login, signup}
