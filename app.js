'use strict'
// require('dotenv').config()
const path = require('path')
const AutoLoad = require('fastify-autoload')
const app = require('fastify')()


  // Place here your custom code!

 
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  app.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, /* opts */)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  app.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, /* opts */)
  })

  app.listen(process.env.PORT || 3000, process.env.HOST || '::', err => {
    if (err) throw err
    console.log(`server listening on ${app.server.address().port}`)
  })


