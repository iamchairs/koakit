"use strict";
const reflect_1 = require('../reflect');
const responseHandler_1 = require('./responseHandler');
const service_1 = require('../rule/service');
const service_2 = require('../injector/service');
class RouteInjectionContext {
}
exports.RouteInjectionContext = RouteInjectionContext;
class RequestHandlerService {
    static requestHandlerFactory(route) {
        return function (request, expressResponse) {
            let scope = this;
            let rules = reflect_1.Reflect.getMetadata('Rules', route.object, route.key) || [];
            console.log(request);
            console.log(this.params);
            return service_1.RuleService.runRules(rules, request).then(() => {
                return service_2.InjectorService.run(route.object, route.key, request).then((response) => {
                    return responseHandler_1.ResponseHandlerService.handleResponse(scope, route, response, expressResponse);
                }).catch((response) => {
                    return responseHandler_1.ResponseHandlerService.handleResponse(scope, route, responseHandler_1.ResponseHandlerService.convertErrorResponse(response), expressResponse);
                });
            }).catch((response) => {
                return responseHandler_1.ResponseHandlerService.handleResponse(scope, route, responseHandler_1.ResponseHandlerService.convertErrorResponse(response), expressResponse);
            });
        };
    }
}
exports.RequestHandlerService = RequestHandlerService;
