declare var require: any;

import {Koakit} from '../../index';

let bodyParser = require('koa-bodyparser');

import './resource/router';
import './basic/router';
import './response/router';
import './middleware/router';
import './rules/router';
import './user/router';

Koakit.start({
  middleware: [
    bodyParser()
  ]
});