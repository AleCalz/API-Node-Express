const createError = require('http-errors')
const jwt = require('../lib/jwt')
const userUseCase = require('../usecases/user.usecases')

/*
revisar que nuestro token exista sea valido
*/
async function auth (request, response, next) {
  try {
    console.log('middleware try inicio')
    // verificamos que exista
    const token = request.headers.authorization
    console.log('middleware token: ', token)
    if (!token) throw createError(401, 'JWT is require')

    // Verificamos validez
    const payload = jwt.verify(token)
    console.log('middleware payload: ', payload)

    const user = await userUseCase.getbyId(payload.id)
    console.log('middleware user: ', user)

    // Setteamos el dueño a la publicacion
    request.user = user.id
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      error: error.message
    })
  }
}

module.exports = auth
