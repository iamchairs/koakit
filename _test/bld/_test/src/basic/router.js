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
const index_4 = require('../../../index');
const index_5 = require('../../../index');
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
    static errorThrownWithResponse() {
        throw index_1.Response.BadRequest();
    }
    static rejectedPromise() {
        return Promise.reject('foo');
    }
    static rejectedPromiseWithResponse() {
        return Promise.reject(index_1.Response.MethodNotAllowed('foo'));
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
    static getWithDefaultErrorCode() {
        return Promise.reject('foo');
    }
    static getWithDefaultResponseCode() {
        return 'foo';
    }
    static basicPut() {
        return 'put';
    }
    static putNoResponse() { }
    static putPayload(payload) {
        return payload;
    }
    static basicPatch() {
        return 'patch';
    }
    static basicPost() {
        return 'post';
    }
    static basicDelete() {
        return 'delete';
    }
    static getAlias() {
        return 'getalias';
    }
    static putAlias() {
        return 'putalias';
    }
    static postAlias() {
        return 'postalias';
    }
    static patchAlias() {
        return 'patchalias';
    }
    static deleteAlias() {
        return 'deletealias';
    }
}
__decorate([
    index_1.Route('GET', '/basic')
], UserRouter, "basicGet", null);
__decorate([
    index_1.Route('GET', '/basic/param/:param'),
    __param(0, index_4.Param('param'))
], UserRouter, "getWithParam", null);
__decorate([
    index_1.Route('GET', '/basic/query'),
    __param(0, index_4.Query('q'))
], UserRouter, "getWithQuery", null);
__decorate([
    index_1.Route('GET', '/basic/optionalquery'),
    __param(0, index_4.Query('q?'))
], UserRouter, "getWithOptionalQuery", null);
__decorate([
    index_1.Route('GET', '/basic/context'),
    __param(0, index_3.Context())
], UserRouter, "getContext", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrown')
], UserRouter, "errorThrown", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrownwithmessage')
], UserRouter, "errorThrownWithMessage", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrownwithresponse')
], UserRouter, "errorThrownWithResponse", null);
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
    __param(0, index_4.Query('q=def'))
], UserRouter, "getWithDefaultQuery", null);
__decorate([
    index_1.Route('GET', '/basic/defaulterrorcode'),
    index_2.ErrorCode(505)
], UserRouter, "getWithDefaultErrorCode", null);
__decorate([
    index_1.Route('GET', '/basic/defaultresponsecode'),
    index_2.ResponseCode(201)
], UserRouter, "getWithDefaultResponseCode", null);
__decorate([
    index_1.Route('PUT', '/basic')
], UserRouter, "basicPut", null);
__decorate([
    index_1.Route('PUT', '/basic/noresponse')
], UserRouter, "putNoResponse", null);
__decorate([
    index_1.Route('PUT', '/basic/payload'),
    index_1.Route('PATCH', '/basic/payload'),
    index_1.Route('POST', '/basic/payload'),
    __param(0, index_4.Body())
], UserRouter, "putPayload", null);
__decorate([
    index_1.Route('PATCH', '/basic')
], UserRouter, "basicPatch", null);
__decorate([
    index_1.Route('POST', '/basic')
], UserRouter, "basicPost", null);
__decorate([
    index_1.Route('DELETE', '/basic')
], UserRouter, "basicDelete", null);
__decorate([
    index_5.GET('/alias')
], UserRouter, "getAlias", null);
__decorate([
    index_5.PUT('/alias')
], UserRouter, "putAlias", null);
__decorate([
    index_5.POST('/alias')
], UserRouter, "postAlias", null);
__decorate([
    index_5.PATCH('/alias')
], UserRouter, "patchAlias", null);
__decorate([
    index_5.DELETE('/alias')
], UserRouter, "deleteAlias", null);
exports.UserRouter = UserRouter;
