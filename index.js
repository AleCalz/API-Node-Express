require('dotenv').config()
const server = require('./src/server')
const PORT = process.env.PORT || 8080
const db = require('./src/lib/mongooseDb')
const { swaggerDocs: V1SwaggerDocs } = require('./src/swagger')

db.connect()
  .then(() => {
    console.log('DB Connected!')
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
      V1SwaggerDocs(server, PORT)
    })
  })
  .catch((error) => console.log(`DB connection error: ${error}`))
