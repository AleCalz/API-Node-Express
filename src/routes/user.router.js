const express = require('express')
const userUseCases = require('../usecases/user.usecases')
const router = express.Router()

/**
 * @openapi
 * /user/{id}:
 *  get:
 *    description: Get user by id
 *    tags:
 *      - user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User id
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                data:
 *                  type: object
 *                  properties:
 *                    userFound:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        name:
 *                          type: string
 *                        profilePic:
 *                          type: string
 *                        email:
 *                        password:
 *                          type: string
 *                        createdAt:
 *                          type: date
 *                        updatedAt:
 *                          type: date
 *      500:
 *        description: Internal Server Error
 *
 */
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

/**
 * @openapi
 * /user:
 *  post:
 *    description: Add new user
 *    tags:
 *      - user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              profilePic:
 *                type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                data:
 *                  type: object
 *                  properties:
 *                    newUser:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        name:
 *                          type: string
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string
 *                        createdAt:
 *                          type: date
 *                        updatedAt:
 *                          type: date
 *      500:
 *        description: 'Error: Internal Server Error'
 *
 */
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

/**
 * @openapi
 * /user:
 *  get:
 *    description: Get all users
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example:
 *                data:
 *                  type: object
 *                  properties:
 *                    allUsers:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                          name:
 *                            type: string
 *                          email:
 *                            type: string
 *                          password:
 *                            type: string
 *                          createdAt:
 *                            type: date
 *                          updatedAt:
 *                            type: date
 *
 */
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

/**
 * @openapi
 * /user/{id}:
 *  delete:
 *    description: Delete user by id
 *    tags:
 *      - user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User id
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *
 *
 */
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

/**
 * @openapi
 * /user/{id}:
 *  patch:
 *    description: Update user by id
 *    tags:
 *      - user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User id
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                data:
 *                  type: object
 *                  properties:
 *                    userUpdated:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        name:
 *                          type: string
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string
 *                        createdAt:
 *                          type: date
 *                        updatedAt:
 *                          type: date
 *
 */
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
