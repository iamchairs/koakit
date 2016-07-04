"use strict";
const reflect_1 = require('../reflect');
const server_1 = require('./server');
const router_1 = require('../router');
const route_1 = require('../route');
const service_1 = require('../rule/service');
const service_2 = require('../injector/service');
const dto_1 = require('../dto');
class ExpressServer extends server_1.ExpresskitServer {
    constructor(express) {
        super();
        this.package = express;
        this.application = express();
        this.router = this.createRouter('/');
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
    getHeader(request, name) {
        return request.header(name);
    }
    getQuery(request, name) {
        return request.query[name];
    }
    getParam(request, name) {
        return request.params[name];
    }
    getBody(request) {
        return request.body;
    }
    getRequestHandler(route) {
        return (ctx, expressResponse) => {
            let rules = reflect_1.Reflect.getMetadata('Rules', route.object, route.key) || [];
            return service_1.RuleService.runRules(this, rules, ctx).then(() => {
                return service_2.InjectorService.run(this, route.object, route.key, ctx).then((response) => {
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
