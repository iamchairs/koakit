"use strict";
const injector_1 = require('restkit/injector');
const optional_1 = require('./optional');
function Query(name) {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: [name]
        };
        let injectionConfig = {
            injectionResolver: new QueryInjectionResolver(),
            injectable: injectable
        };
        injector_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Query = Query;
class QueryInjectionResolver extends optional_1.OptionalResolver {
    resolve(injectable, ctx) {
        let paramName = injectable.arguments[0];
        let optionalParts = this.getOptionalParts(paramName);
        let val = ctx.query[optionalParts.name];
        return this.optionallyResolve(optionalParts, val, 'query parameter');
    }
}
exports.QueryInjectionResolver = QueryInjectionResolver;
