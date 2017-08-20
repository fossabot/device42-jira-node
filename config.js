'use strict';

const Confidence = require('confidence');

const store = new Confidence.Store({
    cache: {
        $filter: 'env',
        test: 'catbox-memory',
        prod: 'catbox-memory',
        $default: 'catbox-memory',
    },
    jira: {
        $filter: 'env',
        prod: {},
        test: {},
        $default: {},
    }
});

const criteria = {
    env: process.env.NODE_ENV
};

exports.get = (key) => {
    return store.get(key, criteria);
};