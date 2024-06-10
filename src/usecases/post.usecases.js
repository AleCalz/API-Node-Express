const PostModel = require('../models/post.model')
const createError = require('http-errors')

async function add (postData) {
  const titleRepeated = await PostModel.findOne({ title: postData.title })
  if (titleRepeated) throw createError(400, 'Title in use')

  const newPost = await PostModel.create(postData)
  return newPost.populate('user')
}

async function getAll () {
  const allPosts = await PostModel.find().populate('user')
  return allPosts
}

async function getById (id) {
  const postExist = await PostModel.findOne({ _id: id })
  if (!postExist) throw createError(400, "The post don't exist")

  const idPost = await PostModel.findById(id).populate('user')
  return idPost
}

async function updatedById (id, body) {
  const postExist = await PostModel.findOne({ _id: id })
  if (!postExist) throw createError(400, "The post don't exist")

  body.updated_at = Date.now()
  const updatedPost = await PostModel.findByIdAndUpdate(id, body, {
    new: true
  }).populate('user')

  return updatedPost
}

async function deletedById (id) {
  const postExist = await PostModel.findOne({ _id: id })
  if (!postExist) throw createError(400, "The post don't exist")

  const deletedPost = await PostModel.findByIdAndDelete(id).populate('user')
  return deletedPost
}

module.exports = { add, getAll, getById, updatedById, deletedById }
