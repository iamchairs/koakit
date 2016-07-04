"use strict";
const reflect_1 = require('../reflect');
const response_1 = require('../route/response');
class InjectorService {
    static registerInjection(object, method, injectionConfig) {
        let injection = reflect_1.Reflect.getMetadata('Injection', object, method) || [];
        injection.push(injectionConfig);
        reflect_1.Reflect.defineMetadata('Injection', injection, object, method);
    }
    static run(server, object, method, context) {
        return new Promise((resolve, reject) => {
            let injection = reflect_1.Reflect.getMetadata('Injection', object, method) || [];
            this.resolveInjection(server, injection, context).then((response) => {
                if (response.type === response_1.ResponseType.Success) {
                    let methodResult = object[method].apply(object, response.data);
                    resolve(methodResult);
                }
                else {
                    reject(response);
                }
            }).catch((response) => {
                reject(response);
            });
        });
    }
    static resolveInjection(server, injection, context) {
        let returnPromises = [];
        injection.forEach((injectionConfig) => {
            returnPromises[injectionConfig.injectable.index] = injectionConfig.injectionResolver.resolve(server, injectionConfig.injectable, context);
        });
        return Promise.all(returnPromises).then((values) => {
            return new response_1.Response(200, values);
        });
    }
}
exports.InjectorService = InjectorService;
