'use strict'

const Jira = require('jira-client')
const Joi = require('joi')
const Config = require('../../config')
const Boom = require('boom')

module.exports.register = (server, options, next) => {

  server.route({
    method: '*',
    path: '/',
    handler: (request, reply) => {

      reply({
        message: `No ${ request.method.toUpperCase() } method configured.`
      }).code(405)
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
          data: Joi.any()
        }
      }
    },
    handler: async(request, reply) => {

      const jiraCall = new Jira(Config.get('/jira'))
      const issue = {
        "fields": {
          "project": {
            "key": process.env.JIRA_PROJ
          },
          "summary": request.payload.action,
          "description":request.payload.data,
          "issuetype": {
            "name": process.env.JIRA_TYPE
          }
        }
      }
      server.log('debug', `issue: ${JSON.stringify(issue)}`)
      try {
        await jiraCall.addNewIssue(issue)
        reply({
          message: `Data accepted via ${ request.method.toUpperCase() }.`
        }).code(202)
      } catch (err) {
        server.log('error', err)
        reply({
            message: Boom.boomify(err)
        }).code(err.statusCode || '' === '' ? err.output.statusCode : err.statusCode)
      }
    }
  })
  next()

}

module.exports.register.attributes = {
  pkg: require('../../package.json')
}
