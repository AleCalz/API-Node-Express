const postUseCase = require('../usecases/post.usecases')
const express = require('express')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allPost = await postUseCase.getAll()
    response.json({
      success: true,
      data: { allPost }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postFound = await postUseCase.getById(id)
    response.json({
      success: true,
      data: { postFound }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const { body } = request
    const postAdded = await postUseCase.add(body)
    response.json({
      success: true,
      data: { postAdded }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await postUseCase.deletedById(id)
    response.json({
      success: true,
      data: { postDeleted }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { body } = request
    const postUpdated = await postUseCase.updatedById(id, body)
    response.json({
      success: true,
      data: { postUpdated }
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
