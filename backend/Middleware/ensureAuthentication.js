const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req, res, next) => {
	const header = req.headers['authorization']
	if (!header)
		return res.status(403).json({message: 'No JWT Token found', success: false})

	try {
		const decoded = jwt.verify(header, process.env.SECRET_KEY)
		req.user = decoded
		next()
	} catch (error) {
		return res.status(403).json({message: 'JWT Token invalid', success: false})
	}
}

module.exports = ensureAuthenticated
