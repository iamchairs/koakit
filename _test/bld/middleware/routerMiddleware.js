"use strict";
const reflect_1 = require('../reflect');
function RouterMiddleware(method) {
    return function (object) {
        let middlewares = reflect_1.Reflect.getMetadata('Middlewares', object) || [];
        middlewares.push(method);
        reflect_1.Reflect.defineMetadata('Middlewares', middlewares, object);
    };
}
exports.RouterMiddleware = RouterMiddleware;
