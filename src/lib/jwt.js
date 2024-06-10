const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

function sign (payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' }) // puede ser 1h / 1w / 1m / 1y
}

function verify (token) {
  return jwt.verify(token, JWT_SECRET)
}

module.exports = { sign, verify }
