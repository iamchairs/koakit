"use strict";
const injector_1 = require('restkit/injector');
const route_1 = require('restkit/route');
const dto_1 = require('restkit/dto');
function Body(dto) {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: [dto]
        };
        let injectionConfig = {
            injectionResolver: new BodyInjectionResolver(),
            injectable: injectable
        };
        injector_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Body = Body;
class BodyInjectionResolver {
    resolve(injectable, ctx) {
        let dto = injectable.arguments[0];
        let body = ctx.request.body;
        if (dto) {
            if (body) {
                dto_1.DTOManager.scrubIn(body, dto);
                let err = dto_1.DTOManager.validate(body, dto);
                if (err) {
                    return Promise.reject(new route_1.Response(400, err));
                }
            }
            else {
                return Promise.reject(new route_1.Response(400, 'Body expected'));
            }
        }
        return Promise.resolve(body);
    }
}
exports.BodyInjectionResolver = BodyInjectionResolver;
