const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

mongoose
	.connect(MONGO_URI)
	.then(() => console.log('Connected to the DB'))
	.catch((err) => console.log(err))
