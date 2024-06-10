const jwt = require('../lib/jwt')
const encrypt = require('../lib/encrypt')
const UserModel = require('../models/user.model')
const createError = require('http-errors')

async function login (email, password) {
  const userExist = await UserModel.findOne({ email })
  if (!userExist) throw createError(401, 'Invalid Data')

  const passValid = await encrypt.compare(password, userExist.password)
  if (!passValid) throw createError(401, 'Invalid Data')
  console.log('login carga payload: ', userExist)
  const token = jwt.sign({ id: userExist._id })
  return token
}

module.exports = { login }
