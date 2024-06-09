require('dotenv').config()
const server = require('./src/server')
const PORT = process.env.PORT || 8080
const db = require('./src/lib/mongooseDb')

db.connect()
  .then(() => {
    console.log('DB Connected!')
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => console.log(`DB connection error: ${error}`))
