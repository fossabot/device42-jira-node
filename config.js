'use strict';

const Confidence = require('confidence');
const Dotenv = require('dotenv').config();

const Store = new Confidence.Store({
    debug_level: {
        $filter: 'where',
        prod: {
            log: ['error'],
            request: ['error', 'uncaught']
        },
        test: {
            log: ['error'],
            request: ['error', 'uncaught']
        },
        $default: {
            log: ['*'],
            request: ['*']
        },
    },
    jira: {
        protocol: 'https',
        host: process.env.JIRA_HOST,
        username: process.env.JIRA_USER,
        password: process.env.JIRA_PASS,
    },
});

const criterion = {
    where: process.env.NODE_ENV
};

exports.get = (key) => {
    return Store.get(key, criterion);
};