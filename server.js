'use strict';

const Hapi = require('hapi');
const Config = require('./config');

const server = new Hapi.Server({
    debug: Config.get('/debug_level')
});

server.connection({ port: 5050 });

server.route({
    method: '*',
    path: '/',
    handler: (request, reply) => {

        reply('Demo API server is running.');
    }
});

module.exports = server;