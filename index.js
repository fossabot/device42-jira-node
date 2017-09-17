'use strict';

const Package = require('./package')
const Vision = require('vision')
const Inert = require('inert')
const Webhook = require('./server/api/index')
const Lout = require('lout')
const Server = require('./server')

const loutOpts = {
    apiVersion: Package.version,
}

Server.register([
    Vision,
    Inert, {
        register: Webhook,
        routes: { prefix: '/api' }
    },
    {
        register: Lout,
        options: loutOpts
    }
], (err) => {

    if (err) {
        Server.log('error', err);
    }
})

Server.start(() => {

    Server.log('info', `Environment is '${ process.env.NODE_ENV }'`);
    Server.log('info', `Demo API server is running on port ${ Server.info.port }`);
})