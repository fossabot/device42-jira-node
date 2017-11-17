'use strict'

const Jira = require('jira-client')
const Joi = require('joi')
const Config = require('../../config')
const Boom = require('boom')
const Bounce = require('bounce')

exports.plugin = {
  register: (server, options) => {
  server.route({
    method: '*',
    path: '/',
    handler: (request, h) => {
      return h.response(`No ${request.method.toUpperCase()} method configured.`).code(405)
    }
  })

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
    handler: async (request, h) => {
      const jiraCall = new Jira(Config.get('/jira'))
      const issue = {
        'fields': {
          'project': {
            'key': process.env.JIRA_PROJ
          },
          'summary': request.payload.action,
          'description': request.payload.data,
          'issuetype': {
            'name': process.env.JIRA_TYPE
          }
        }
      }
      server.log('debug', `issue: ${JSON.stringify(issue)}`)
      try {
        await jiraCall.addNewIssue(issue)
        return h.response(`Data accepted via ${request.method.toUpperCase()}.`).code(202)
      } catch (err) {
        Bounce.rethrow(err, 'system')
        server.log('error', err)
        return h.response(Boom.boomify(err)).code(err.statusCode || '' === '' ? err.output.statusCode : err.statusCode)
      }
    }
  })
//  next()
  },
  pkg: require('../../package.json')
}
// module.exports.register.attributes = {
// }
