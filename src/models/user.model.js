const mongoose = require('mongoose')

const modelName = 'User'
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxLength: 50,
    minLength: 2
  },
  profilePic: {
    type: String,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  },
  password: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model(modelName, schema)
