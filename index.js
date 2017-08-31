'use strict';

const Hapi = require('hapi'); // hapi router
const Config = require('./config')

const server = new Hapi.Server({
    cache: require(Config.get('/cache')),
    debug: Config.get('/debug_level'),
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
        server.log('error', err);
    } else {
        server.start((err) => {
            if (err) {
                server.log('error', err);
            } else {
                server.log('info', `Environment is '${ process.env.NODE_ENV }'`);
                server.log('info', `Demo API server is running on port ${ server.info.port }`);
            };
        });
    }
});