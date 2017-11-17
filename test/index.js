'use strict'

const Code = require('code')
const Lab = require('lab')
const Server = require('../server')

const { describe, it } = exports.lab = Lab.script()
const expect = Code.expect

describe('Base URL', () => {
  it('returns \'Demo API server is running.\'', async () => {
    const res = await Server.inject('/')
    expect(res.statusCode).to.equal(200)
    expect(res.result).to.equal('Demo API server is running.')
  })
})
