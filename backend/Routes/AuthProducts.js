const ensureAuthenticated = require('../Middleware/ensureAuthentication')
const route = require('express').Router()

route.get('/', ensureAuthenticated, (req, res) => {
	res.json([
		{name: 'terebi', price: 10000},
		{name: 'sumaho', price: 20000},
	])
})

module.exports = route
