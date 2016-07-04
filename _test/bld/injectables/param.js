"use strict";
const injector_1 = require('restkit/injector');
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
        injector_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Param = Param;
class ParamInjectionResolver extends optional_1.OptionalResolver {
    resolve(injectable, ctx) {
        let paramName = injectable.arguments[0];
        let optionalParts = this.getOptionalParts(paramName);
        let val = ctx.params[optionalParts.name];
        return this.optionallyResolve(optionalParts, val, 'parameter');
    }
}
exports.ParamInjectionResolver = ParamInjectionResolver;
