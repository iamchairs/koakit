"use strict";
const restkit_1 = require('restkit');
const index_1 = require('../../index');
let bodyParser = require('koa-bodyparser');
require('./auth/router');
require('./basic/router');
require('./middleware/router');
require('./rules/router');
require('./user/router');
restkit_1.Restkit.start({
    server: new index_1.KoaServer(),
    middleware: [
        bodyParser()
    ]
});
