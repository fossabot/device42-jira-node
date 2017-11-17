'use strict'

const Package = require('./package')
const Vision = require('vision')
const Inert = require('inert')
//const Webhook = require('./server/api/index')
//const Lout = require('lout')
const Server = require('./server')
const Bounce = require('bounce')

// const loutOpts = {
//   apiVersion: Package.version
// }
async function registerPIs () {
  try {
    await Server.register({ plugin: Vision })
    await Server.register({ plugin: Inert })
    // await Server.register({
    //   register: Webhook,
    //   options: { routes: { prefix: '/api' } }
    // })
    // await Server.register({
    //   plugin: Lout,
    //   options: loutOpts
    // })
  }
  catch (err) {
    Bounce.rethrow(err, 'system')
    throw new Error('Did not register all.')
  }
}

async function startUp () {
  try {
    await Server.start()
  }
  catch (err) {
    Bounce.rethrow(err, 'system')
    throw new Error('Server did not start.')
  }
}

registerPIs()
startUp()

Server.log('info', `Environment is '${process.env.NODE_ENV}'`)
Server.log('info', `Demo API server is running on port ${Server.info.port}`)
