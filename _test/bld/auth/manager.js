"use strict";
const error_1 = require('../error');
class IAuthHandler {
    constructor() {
        this.isDefault = false;
    }
}
exports.IAuthHandler = IAuthHandler;
class AuthManager {
    static registerAuthenticationHandler(handler) {
        let defaultHandler = this.getDefault();
        let namedHandler = this.getHandlerByName(handler.name);
        if (handler.isDefault && defaultHandler) {
            error_1.fatal(new Error(`Unable to register authentication handler at ${handler.object.prototype.constructor.name}.${handler.method} as a default authentication resolution method. ${defaultHandler.object.prototype.constructor.name}.${defaultHandler.method} is already the default authentication method.`));
        }
        if (namedHandler) {
            error_1.fatal(new Error(`Unable to register authentication handler at ${handler.object.prototype.constructor.name}.${handler.method} with the name '${handler.name}'. ${namedHandler.object.prototype.constructor.name}.${namedHandler.method} has already registered this name.`));
        }
        this.handlers.push(handler);
    }
    static getHandlerByName(nm) {
        let handler = null;
        this.handlers.forEach((res) => {
            if (res.name === nm) {
                handler = res;
            }
        });
        return handler;
    }
    static getDefault() {
        let handler = null;
        this.handlers.forEach((res) => {
            if (res.isDefault) {
                handler = res;
            }
        });
        return handler;
    }
    static hasDefault() {
        let defaultFound = false;
        this.handlers.forEach((handler) => {
            if (handler.isDefault) {
                defaultFound = true;
            }
        });
        return defaultFound;
    }
}
AuthManager.handlers = [];
exports.AuthManager = AuthManager;
