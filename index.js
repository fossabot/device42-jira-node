'use strict';

const Hapi = require('hapi'); // hapi router 

const Joi = require('joi'); // hapi validator
const Hoek = require('hoek'); // hapi utils

const server = new Hapi.Server({
    cache: require('catbox-memory'),
    debug: {
        log: ['*'],
        request: ['*']
    },
});

server.connection({ port: 5050 });

server.route({
    method: '*',
    path: '/',
    handler: (request, reply) => {
        reply('Demo API server is running.');
    },
});

server.register({
    register: require('./server/api/webhook'),
    routes: { prefix: '/api' }
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        server.start((err) => {
            if (err) {
                console.log(err);
            } else {
                server.log('info', 'Demo API server is running on port ' + server.info.port + '.');
            };
        });
    }
});