"use strict";
const manager_1 = require('./manager');
function AuthHandler(name, isDefault) {
    return function (object, method) {
        let handler = {
            name: name,
            isDefault: !!isDefault,
            object: object,
            method: method
        };
        manager_1.AuthManager.registerAuthenticationHandler(handler);
    };
}
exports.AuthHandler = AuthHandler;
