const PostModel = require('../models/post.model')
const createError = require('http-errors')

async function add (postData) {
  const titleRepeated = await PostModel.findOne({ title: postData.title })
  if (titleRepeated) throw createError(400, 'This title already exists')

  const newPost = await PostModel.create(postData)
  return newPost.populate('user')
}

async function getAll () {
  const allPosts = await PostModel.find().populate('user')
  return allPosts
}

async function search (query) {
  // console.log('query: ', query)
  const postExist = await PostModel.findOne({ title: query?.title })
  // console.log('postExist: ', postExist)

  if (!postExist) throw createError(400, "There aren't post with that title")

  const titlePost = await PostModel.find(query).populate('user')
  return titlePost
}

async function updatedById (id, body) {
  const postExist = await PostModel.findOne({ _id: id })
  if (!postExist) throw createError(400, "That post doesn't exist")

  // si no existe el user desde el body
  if (!body.user) body.user = postExist.user
  // console.log('userExistente en el post: ', postExist.user)
  // console.log('user que llega al querer actualizar: ', body.user)
  if (JSON.stringify(body.user) !== JSON.stringify(postExist.user)) throw createError(400, 'ID IS DIFERENT : You can not update the user')

  body.updated_at = Date.now()
  const updatedPost = await PostModel.findByIdAndUpdate(id, body, {
    new: true
  }).populate('user')

  return updatedPost
}

async function deletedById (id, idUser) {
  const postExist = await PostModel.findOne({ _id: id })
  if (!postExist) throw createError(400, "That post doesn't exist")

  // console.log('idExistente en el post: ', typeof JSON.stringify(postExist.user), JSON.stringify(postExist.user))
  // console.log('id que llega al querer eliminar: ', typeof idUser, idUser)

  if (JSON.stringify(postExist.user) !== JSON.stringify(idUser)) {
    throw createError(400, 'You can not delete this post')
  }

  const deletedPost = await PostModel.findByIdAndDelete(id).populate('user')
  return deletedPost
}

module.exports = { add, getAll, search, updatedById, deletedById }
