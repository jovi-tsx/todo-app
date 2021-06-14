const port = 3003

const express = require('express')
const app = express()
const allowCors = require('./cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(allowCors)

app.listen(port, () => console.log(`Backend is running on port ${port}`))

module.exports = app