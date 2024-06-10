const mongoose = require('mongoose')

const modelName = 'Posts'
const newSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 50
  },
  image: {
    type: String
  },
  body: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: {
    type: Date,
    require: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    require: true,
    default: Date.now
  }
})

module.exports = mongoose.model(modelName, newSchema)
