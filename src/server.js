const express = require('express')
const userRouter = require('./routes/user.router')
const app = express()

app.use(express.json())

app.use('/users', userRouter)

app.get('/', (request, response) => {
  response.json({
    message: 'API v1 Reto Backend'
  })
})

module.exports = app
