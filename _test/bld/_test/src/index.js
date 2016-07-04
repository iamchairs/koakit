"use strict";
const index_1 = require('../../index');
let bodyParser = require('koa-bodyparser');
require('./auth/router');
require('./basic/router');
require('./middleware/router');
require('./rules/router');
require('./user/router');
index_1.Koakit.start({
    middleware: [
        bodyParser()
    ]
});
