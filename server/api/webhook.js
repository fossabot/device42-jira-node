'use strict';

const Jira = require('jira-client');

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

            const jira = new Jira({
                protocol: 'https',
                host: 'jira.somehost.com',
                username: 'username',
                password: 'password',
                apiVersion: '2',
                strictSSL: true
            });

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