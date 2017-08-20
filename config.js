'use strict';

const Confidence = require('confidence');
const Dotenv = require('dotenv').config();

const Store = new Confidence.Store({
    cache: process.env.HAPI_CACHE_TYPE,
    jira: {
        protocol: 'https',
        host: process.env.JIRA_HOST,
        username: process.env.JIRA_USER,
        password: process.env.JIRA_PASS,
        apiVersion: '2',
        strictSSL: true
    }
});

exports.get = (key) => {
    return Store.get(key, null);
};