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
class UserRouter {
    static basicGet() {
        return 'get';
    }
    static getWithParam(param) {
        return param;
    }
    static getWithQuery(q) {
        return q;
    }
    static getWithOptionalQuery(q) {
        if (q) {
            return q;
        }
        return 'optional';
    }
    static getContext(req) {
        return req.query.foo;
    }
    static errorThrown() {
        throw new Error();
    }
    static errorThrownWithMessage() {
        throw new Error('foo');
    }
    static rejectedPromise() {
        return Promise.reject('foo');
    }
    static rejectedPromiseWithResponse() {
        return Promise.reject(new index_1.Response(405, 'foo'));
    }
    static resolvedPromise() {
        return Promise.resolve();
    }
    static resolvedPromiseWithMessage() {
        return Promise.resolve('foo');
    }
    static resolvedPromiseWithResponse() {
        return Promise.resolve(new index_1.Response(201, 'foo'));
    }
    static basicResponse() {
        return new index_1.Response(201, 'foo');
    }
    static getWithDefaultQuery(q) {
        return q;
    }
    static basicPut() {
        return 'put';
    }
    static putNoResponse() { }
    static putPayload(payload) {
        return payload;
    }
    static basicPost() {
        return 'post';
    }
    static basicDelete() {
        return 'delete';
    }
}
__decorate([
    index_1.Route('GET', '/basic')
], UserRouter, "basicGet", null);
__decorate([
    index_1.Route('GET', '/basic/param/:param'),
    __param(0, index_3.Param('param'))
], UserRouter, "getWithParam", null);
__decorate([
    index_1.Route('GET', '/basic/query'),
    __param(0, index_3.Query('q'))
], UserRouter, "getWithQuery", null);
__decorate([
    index_1.Route('GET', '/basic/optionalquery'),
    __param(0, index_3.Query('q?'))
], UserRouter, "getWithOptionalQuery", null);
__decorate([
    index_1.Route('GET', '/basic/context'),
    __param(0, index_2.Context())
], UserRouter, "getContext", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrown')
], UserRouter, "errorThrown", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrownwithmessage')
], UserRouter, "errorThrownWithMessage", null);
__decorate([
    index_1.Route('GET', '/basic/rejectedpromise')
], UserRouter, "rejectedPromise", null);
__decorate([
    index_1.Route('GET', '/basic/rejectedpromisewithresponse')
], UserRouter, "rejectedPromiseWithResponse", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromise')
], UserRouter, "resolvedPromise", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromisewithmessage')
], UserRouter, "resolvedPromiseWithMessage", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromisewithresponse')
], UserRouter, "resolvedPromiseWithResponse", null);
__decorate([
    index_1.Route('GET', '/basic/response')
], UserRouter, "basicResponse", null);
__decorate([
    index_1.Route('GET', '/basic/defaultquery'),
    __param(0, index_3.Query('q=def'))
], UserRouter, "getWithDefaultQuery", null);
__decorate([
    index_1.Route('PUT', '/basic')
], UserRouter, "basicPut", null);
__decorate([
    index_1.Route('PUT', '/basic/noresponse')
], UserRouter, "putNoResponse", null);
__decorate([
    index_1.Route('PUT', '/basic/payload'),
    index_1.Route('POST', '/basic/payload'),
    __param(0, index_3.Body())
], UserRouter, "putPayload", null);
__decorate([
    index_1.Route('POST', '/basic')
], UserRouter, "basicPost", null);
__decorate([
    index_1.Route('DELETE', '/basic')
], UserRouter, "basicDelete", null);
exports.UserRouter = UserRouter;
