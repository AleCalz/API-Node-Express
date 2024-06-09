const mongoose = require('mongoose')

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`

function connect () {
  return mongoose.connect(URI)
}

module.exports = { connect }
