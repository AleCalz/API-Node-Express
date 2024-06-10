const express = require('express')
const userRouter = require('./routes/user.router')
const postRouter = require('./routes/post.router')
const authRouter = require('./routes/auth.router')
const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/posts', postRouter)
app.use('/auth', authRouter)

app.get('/', (request, response) => {
  response.json({
    message: 'API v1 Reto Backend'
  })
})

module.exports = app
