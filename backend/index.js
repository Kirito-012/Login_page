require('dotenv').config()
require('./Models/connect')

const express = require('express')
const app = express()
const router = require('./Routes/AuthRouter')
const route = require('./Routes/AuthProducts')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', router)
app.use('/products', route)

app.get('/', (req, res) => res.send('Hola'))

app.listen(PORT, () => console.log(`Listening to the port ${PORT}...`))
