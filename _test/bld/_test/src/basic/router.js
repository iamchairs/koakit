"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    index_1.Route('GET', '/basic'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicGet", null);
__decorate([
    index_1.Route('GET', '/basic/param/:param'),
    __param(0, index_4.Param('param')), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UserRouter, "getWithParam", null);
__decorate([
    index_1.Route('GET', '/basic/query'),
    __param(0, index_4.Query('q')), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UserRouter, "getWithQuery", null);
__decorate([
    index_1.Route('GET', '/basic/optionalquery'),
    __param(0, index_4.Query('q?')), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UserRouter, "getWithOptionalQuery", null);
__decorate([
    index_1.Route('GET', '/basic/context'),
    __param(0, index_3.Context()), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], UserRouter, "getContext", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrown'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "errorThrown", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrownwithmessage'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "errorThrownWithMessage", null);
__decorate([
    index_1.Route('GET', '/basic/errorthrownwithresponse'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "errorThrownWithResponse", null);
__decorate([
    index_1.Route('GET', '/basic/rejectedpromise'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "rejectedPromise", null);
__decorate([
    index_1.Route('GET', '/basic/rejectedpromisewithresponse'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "rejectedPromiseWithResponse", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromise'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "resolvedPromise", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromisewithmessage'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "resolvedPromiseWithMessage", null);
__decorate([
    index_1.Route('GET', '/basic/resolvedpromisewithresponse'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "resolvedPromiseWithResponse", null);
__decorate([
    index_1.Route('GET', '/basic/response'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicResponse", null);
__decorate([
    index_1.Route('GET', '/basic/defaultquery'),
    __param(0, index_4.Query('q=def')), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', void 0)
], UserRouter, "getWithDefaultQuery", null);
__decorate([
    index_1.Route('GET', '/basic/defaulterrorcode'),
    index_2.ErrorCode(505), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', Promise)
], UserRouter, "getWithDefaultErrorCode", null);
__decorate([
    index_1.Route('GET', '/basic/defaultresponsecode'),
    index_2.ResponseCode(201), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "getWithDefaultResponseCode", null);
__decorate([
    index_1.Route('PUT', '/basic'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicPut", null);
__decorate([
    index_1.Route('PUT', '/basic/noresponse'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "putNoResponse", null);
__decorate([
    index_1.Route('PUT', '/basic/payload'),
    index_1.Route('PATCH', '/basic/payload'),
    index_1.Route('POST', '/basic/payload'),
    __param(0, index_4.Body()), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], UserRouter, "putPayload", null);
__decorate([
    index_1.Route('PATCH', '/basic'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicPatch", null);
__decorate([
    index_1.Route('POST', '/basic'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicPost", null);
__decorate([
    index_1.Route('DELETE', '/basic'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "basicDelete", null);
__decorate([
    index_5.GET('/alias'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "getAlias", null);
__decorate([
    index_5.PUT('/alias'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "putAlias", null);
__decorate([
    index_5.POST('/alias'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "postAlias", null);
__decorate([
    index_5.PATCH('/alias'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "patchAlias", null);
__decorate([
    index_5.DELETE('/alias'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], UserRouter, "deleteAlias", null);
exports.UserRouter = UserRouter;
