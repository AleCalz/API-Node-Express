const encrypt = require('bcryptjs')

const SALT_ROUNDS = 10

function crypt (pass) {
  return encrypt.hash(pass, SALT_ROUNDS)
}

function compare (plainText, hash) {
  return encrypt.compare(plainText, hash)
}

module.exports = { crypt, compare }
