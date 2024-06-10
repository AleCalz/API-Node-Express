const postUseCase = require('../usecases/post.usecases')
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth.middleware')

router.post('/', auth, async (request, response) => {
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

router.get('/search', async (request, response) => {
  try {
    const { query } = request
    const titleFound = await postUseCase.search(query)
    response.json({
      success: true,
      data: { titleFound }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const { user } = request.body
    const postDeleted = await postUseCase.deletedById(id, user)
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

router.patch('/:id', auth, async (request, response) => {
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
