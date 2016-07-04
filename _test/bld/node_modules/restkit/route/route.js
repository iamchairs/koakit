"use strict";
const manager_1 = require('./manager');
function Route(method, path) {
    return function (obj, key) {
        manager_1.RouteManager.registerRoute(method, path, obj, key);
    };
}
exports.Route = Route;
