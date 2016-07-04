"use strict";
const reflect_1 = require('../reflect');
function RouteMiddleware(middleware) {
    return function (object, method) {
        let middlewares = reflect_1.Reflect.getMetadata('Middlewares', object, method) || [];
        middlewares.push(middleware);
        reflect_1.Reflect.defineMetadata('Middlewares', middlewares, object, method);
    };
}
exports.RouteMiddleware = RouteMiddleware;
