const express = require('express')
const cors = require('cors');
const colors = require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const path = require('path')
const serveStatic = require('serve-static')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/games', require('./routes/gameRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))