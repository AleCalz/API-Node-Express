const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Metadata info  API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API-NodeJS - Manejo de Ususarios',
      version: '1.0.0',
      description: 'API NodeJS para Manejo de Usuarios y Posts'
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  apis: ['./src/routes/*.js']
}

// Doc en JSON

const swaggerSpec = swaggerJSDoc(options)

// fconfigurar nuestra documentación
const swaggerDocs = (app, port) => {
  app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/v1/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`Docs disponibles en http://localhost:${port}/v1/api-docs`)
}

module.exports = { swaggerDocs }
