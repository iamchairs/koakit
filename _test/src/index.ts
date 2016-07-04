declare var require: any;

import {Restkit} from 'restkit';

import {KoaServer} from '../../index';

let bodyParser = require('koa-bodyparser');

import './auth/router';
import './basic/router';
import './middleware/router';
import './rules/router';
import './user/router';

Restkit.start({
  server: new KoaServer(),
  middleware: [
    bodyParser()
  ]
});