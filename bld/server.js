"use strict";
let express = require('express');
const reflect_1 = require('restkit/reflect');
const server_1 = require('restkit/server');
const route_1 = require('restkit/route');
const rule_1 = require('restkit/rule');
const injector_1 = require('restkit/injector');
const dto_1 = require('restkit/dto');
const router_1 = require('./router');
class ExpressServer extends server_1.RestkitServer {
    constructor() {
        super();
        this.package = express;
        this.application = express();
        this.baseRouter = this.createRouter('/');
    }
    createRouter(mount) {
        let router = this.package.Router();
        return new router_1.ExpressRouter(mount, router);
    }
    use(...args) {
        return this.application.use.apply(this.application, args);
    }
    listen(...args) {
        return this.listenHandle = this.application.listen.apply(this.application, args);
    }
    stop(...args) {
        return this.listenHandle.stop.apply(this.application, args);
    }
    getRequestHandler(route) {
        return (ctx, expressResponse) => {
            let rules = reflect_1.Reflect.getMetadata('Rules', route.object, route.key) || [];
            return rule_1.RuleService.runRules(rules, ctx).then(() => {
                return injector_1.InjectorService.run(route.object, route.key, ctx).then((response) => {
                    return this.sendResponse(route, expressResponse, route_1.ResponseService.convertSuccessResponse(response));
                }).catch((response) => {
                    return this.sendResponse(route, expressResponse, route_1.ResponseService.convertErrorResponse(response));
                });
            }).catch((response) => {
                return this.sendResponse(route, expressResponse, route_1.ResponseService.convertErrorResponse(response));
            });
        };
    }
    sendResponse(route, expressResponse, response) {
        let object = route.object;
        let key = route.key;
        let responseType = reflect_1.Reflect.getMetadata('ResponseType', object, key);
        if (responseType) {
            dto_1.DTOManager.scrubOut(response.data, responseType);
        }
        expressResponse.status(response.httpCode).send(response.data);
    }
}
exports.ExpressServer = ExpressServer;
