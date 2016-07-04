"use strict";
const injector_1 = require('restkit/injector');
const optional_1 = require('./optional');
function Header(name) {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: [name]
        };
        let injectionConfig = {
            injectionResolver: new HeaderInjectionResolver(),
            injectable: injectable
        };
        injector_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Header = Header;
class HeaderInjectionResolver extends optional_1.OptionalResolver {
    resolve(injectable, request) {
        let paramName = injectable.arguments[0];
        let optionalParts = this.getOptionalParts(paramName);
        let val = request.header(optionalParts.name);
        return this.optionallyResolve(optionalParts, val, 'header');
    }
}
exports.HeaderInjectionResolver = HeaderInjectionResolver;
