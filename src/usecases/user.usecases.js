const User = require('../models/user.model')
const createError = require('http-errors')
const encrypt = require('../lib/encrypt')

async function add (body) {
  const emailRepeated = await User.findOne({ email: body.email })
  console.log(`email que llega: ${emailRepeated}`)
  if (emailRepeated) throw createError(400, 'User email already exist')

  body.password = await encrypt.crypt(body.password)

  const newUser = await User.create(body)
  return newUser
}

async function getAll () {
  const allUsers = await User.find()
  return allUsers
}

async function getbyId (id) {
  const idExist = await User.findOne({ _id: id })
  if (!idExist) throw createError(400, "The user don't exist")

  const userFound = await User.findById(id)
  return userFound
}

async function deletedById (id) {
  const idExist = await User.findOne({ _id: id })
  if (!idExist) throw createError(400, "The user don't exist")

  const userDeleted = await User.findByIdAndDelete(id)
  return userDeleted
}

async function updatedById (id, body) {
  const idExist = await User.findOne({ _id: id })
  if (!idExist) throw createError(400, "The user don't exist")

  body.updated_at = Date.now()
  const userUpdated = await User.findByIdAndUpdate(id, body, {
    new: true
  })
  return userUpdated
}

module.exports = { add, getAll, getbyId, deletedById, updatedById }
