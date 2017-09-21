'use strict'

const Code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const Server = require('../server')

lab.experiment('Testing base URL for requests.', () => {

    lab.test('It will return Demo API server is running.', (done) => {

        Server.inject('/', (res) => {

            Code.expect(res.statusCode).to.equal(200)
            Code.expect(res.result).to.equal('Demo API server is running.')
            done()
        })
    })
})
