"use strict";
const manager_1 = require('./manager');
function Router(mount) {
    return function (object) {
        manager_1.RouteManager.registerRouter(object, mount);
    };
}
exports.Router = Router;
