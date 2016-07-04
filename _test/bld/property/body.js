"use strict";
const service_1 = require('../injector/service');
const route_1 = require('../route');
const manager_1 = require('../dto/manager');
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
        service_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Body = Body;
class BodyInjectionResolver {
    resolve(server, injectable, request) {
        let dto = injectable.arguments[0];
        let body = server.getBody(request);
        if (dto) {
            if (body) {
                manager_1.DTOManager.scrubIn(body, dto);
                let err = manager_1.DTOManager.validate(body, dto);
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
