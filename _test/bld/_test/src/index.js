"use strict";
const index_1 = require('../../index');
let bodyParser = require('koa-bodyparser');
require('./resource/router');
require('./basic/router');
require('./response/router');
require('./middleware/router');
require('./rules/router');
require('./user/router');
require('./dto/router');
index_1.Koakit.start({
    middleware: [
        bodyParser()
    ]
});
