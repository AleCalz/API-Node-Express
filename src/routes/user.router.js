const express = require('express')
const userUseCases = require('../usecases/user.usecases')
const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const userFound = await userUseCases.getbyId(id)
    res.json({
      success: true,
      data: { userFound }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const { body } = req
    const newUser = await userUseCases.add(body)
    res.json({
      success: true,
      data: { newUser }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allUsers = await userUseCases.getAll()
    res.json({
      success: true,
      data: { allUsers }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const userDeleted = await userUseCases.deletedById(id)
    res.json({
      success: true,
      data: { userDeleted }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const userUpdated = await userUseCases.updatedById(id, body)
    res.json({
      success: true,
      data: { userUpdated }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
