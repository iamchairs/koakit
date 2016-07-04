"use strict";
const service_1 = require('../injector/service');
const optional_1 = require('./optional');
function Param(name) {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: [name]
        };
        let injectionConfig = {
            injectionResolver: new ParamInjectionResolver(),
            injectable: injectable
        };
        service_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Param = Param;
class ParamInjectionResolver extends optional_1.OptionalResolver {
    resolve(server, injectable, request) {
        let paramName = injectable.arguments[0];
        let optionalParts = this.getOptionalParts(paramName);
        let val = server.getParam(request, optionalParts.name);
        return this.optionallyResolve(optionalParts, val, 'parameter');
    }
}
exports.ParamInjectionResolver = ParamInjectionResolver;
