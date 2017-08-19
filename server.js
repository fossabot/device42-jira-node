'use strict';
// add required libs
const Hapi = require('hapi'); // the router sw
const Path = require('path'); // allows relative paths
const Joi = require('joi'); // allows parameter checks
const Hoek = require('hoek');

// invoke server object
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});
server.connection({ port: 3000 });
// default action on `/`
server.route({
    method: ['POST', 'PUT'],
    path: '/',
    handler: function(request, reply) {
        reply('created').code(201); // do-something
    },
});
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('The Server is running and capable of accepting POST/PUT'); // do-something
    },
});

// adding logging
const Good = require('good');
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {
    if (err) {
        throw err; // something bad happened loading the plugin
    }
    // launch server process and wait
    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

server.register(require('vision'), (err) => {
    Hoek.assert(!err, err);
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
});