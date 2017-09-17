'use strict';

const Jira = require('jira-client');
const Joi = require('joi');
const Config = require('../../config');
const Boom = require('boom');

module.exports.register = (server, options, next) => {

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
                    category: Joi.string(),
                    from: Joi.string(),
                    user: Joi.string(),
                    time_stamp: Joi.string(),
                    action: Joi.string(),
                    data: Joi.any(),
                }
            }
        },
        handler: async(request, reply) => {

            const jiraCall = new Jira(Config.get('/jira'));
            server.log('debug', request.payload)
            const issue = {};
            issue['fields'] = {};
            issue.fields['project'] = {};
            issue.fields.project.key = process.env.JIRA_PROJ;
            issue.fields.summary = request.payload.action;
            issue.fields.description = JSON.stringify(request.payload.data);
            issue.fields['issuetype'] = {};
            issue.fields.issuetype.name = process.env.JIRA_TYPE;
            server.log('debug', issue)
            try {
                await jiraCall.addNewIssue(issue)
            } catch (err) {
                server.log('error', err)
                return reply({
                    message: Boom.boomify(err)
                }).code(err.statusCode);
            }
            return reply({
                message: `Data accepted via ${ request.method.toUpperCase() }.`
            }).code(202);
        }
    })
    next();

};

module.exports.register.attributes = {
    pkg: require('../../package.json')
};