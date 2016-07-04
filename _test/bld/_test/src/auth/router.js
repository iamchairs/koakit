"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const index_1 = require('../../../index');
const index_2 = require('../../../index');
const index_3 = require('../../../index');
class AuthService {
    static fooAuth() {
        return 'fooauth';
    }
    static barAuth(auth) {
        if (auth === 'barauth-throwerror') {
            throw new Error();
        }
        else if (auth === 'barauth-throwerrormessage') {
            throw new Error('bar');
        }
        else if (auth === 'barauth-reject') {
            return Promise.reject('foo');
        }
        else if (auth === 'barauth-rejectspecial') {
            return Promise.reject(new index_1.Response(405, 'foo'));
        }
        return auth;
    }
}
__decorate([
    index_3.AuthHandler('Foo', true)
], AuthService, "fooAuth", null);
__decorate([
    index_3.AuthHandler('Bar'),
    __param(0, index_2.Header('Authorization'))
], AuthService, "barAuth", null);
exports.AuthService = AuthService;
class AuthRouter {
    static getWidgetA(auth) {
        return auth;
    }
    static getWidgetB(auth) {
        return auth;
    }
}
__decorate([
    index_1.Route('GET', '/auth/foo'),
    __param(0, index_3.Auth())
], AuthRouter, "getWidgetA", null);
__decorate([
    index_1.Route('GET', '/auth/bar'),
    __param(0, index_3.Auth('Bar'))
], AuthRouter, "getWidgetB", null);
exports.AuthRouter = AuthRouter;
