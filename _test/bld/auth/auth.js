"use strict";
const service_1 = require('../injector/service');
const response_1 = require('../route/response');
const manager_1 = require('./manager');
function Auth(name) {
    return function (object, method, index) {
        let injectable = {
            index: index,
            arguments: [name]
        };
        let injectionConfig = {
            injectionResolver: new AuthenticationInjectionResolver(),
            injectable: injectable
        };
        service_1.InjectorService.registerInjection(object, method, injectionConfig);
    };
}
exports.Auth = Auth;
class AuthenticationInjectionResolver {
    resolve(server, injectable, request) {
        return new Promise((resolve, reject) => {
            let name = injectable.arguments[0];
            let authResource;
            if (name) {
                authResource = manager_1.AuthManager.getHandlerByName(name);
            }
            else {
                authResource = manager_1.AuthManager.getDefault();
            }
            service_1.InjectorService.run(server, authResource.object, authResource.method, request).then((response) => {
                if (response.type === response_1.ResponseType.Error) {
                    reject(response);
                }
                else {
                    resolve(response);
                }
            })
                .catch((response) => {
                if (!(response instanceof response_1.Response) && !(response instanceof Error)) {
                    reject(new response_1.Response(401, response));
                }
                else {
                    reject(response);
                }
            });
        });
    }
}
exports.AuthenticationInjectionResolver = AuthenticationInjectionResolver;
