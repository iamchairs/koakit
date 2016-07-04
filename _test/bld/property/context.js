"use strict";
const service_1 = require('../injector/service');
const optional_1 = require('./optional');
function Context() {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: []
        };
        let injectionConfig = {
            injectionResolver: new ContextInjectionResolver(),
            injectable: injectable
        };
        service_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Context = Context;
class ContextInjectionResolver extends optional_1.OptionalResolver {
    resolve(server, injectable, request) {
        return Promise.resolve(request);
    }
}
exports.ContextInjectionResolver = ContextInjectionResolver;
