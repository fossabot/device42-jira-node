'use strict';

exports.register = (server, options, next) => {

    server.route({
        method: '*',
        path: '/',
        handler: (request, reply) => {
            reply({
                message: 'Data NOT accepted via ' + request.method.toUpperCase() + '.'
            }).code(405);
        }
    });

    server.route({
        method: ['POST', 'PUT'],
        path: '/',
        handler: (request, reply) => {
            reply({
                message: 'Data accepted via ' + request.method.toUpperCase() + '.'
            }).code(202);
        },
    });

    next();

};

exports.register.attributes = {
    pkg: require('../../package.json')
};