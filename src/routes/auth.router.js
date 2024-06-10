const express = require('express')
const autUseCase = require('../usecases/auth.usecases')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await autUseCase.login(email, password)
    response.json({
      success: true,
      data: { token }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})
module.exports = router
