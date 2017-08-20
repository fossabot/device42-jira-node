'use strict';

const Jira = require('jira-client');
const Joi = require('joi');
const Config = require('../../config.js')

exports.register = (server, options, next) => {

    server.route({
        method: '*',
        path: '/',
        handler: (request, reply) => {
            reply({
                message: `No ${ request.method.toUpperCase() } method configured.`
            }).code(405);
        }
    });

    server.route({
        method: ['POST'],
        path: '/',
        config: {
            validate: {
                payload: {
                    Category: Joi.string(),
                    Action: Joi.string(),
                    From: Joi.string(),
                    User: Joi.string(),
                    Data: Joi.string(),
                }
            }
        },
        handler: (request, reply) => {
            server.log('info', request.payload)
            const jira = new Jira(Config.get('/jira'));

            reply({
                message: `Data accepted via ${ request.method.toUpperCase() }.`
            }).code(202);
        },
    });

    next();

};

exports.register.attributes = {
    pkg: require('../../package.json')
};