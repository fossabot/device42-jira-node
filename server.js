'use strict'

const Hapi = require('hapi')
const Config = require('./config')

const server = new Hapi.Server({
  port: 5050,
  debug: Config.get('/debug_level')
})

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Demo API server is running.'
})

server.route({
  method: '*',
  path: '/',
  handler: (request, h) => {
    return h.response(`No ${request.method.toUpperCase()} method configured.`).code(405)
  }
})

module.exports = server
