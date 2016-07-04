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
const route_1 = require('restkit/route');
const auth_1 = require('restkit/auth');
const dto_1 = require('restkit/dto');
const injectables_1 = require('../../../injectables');
class User {
}
__decorate([
    dto_1.Validate({
        required: true
    })
], User.prototype, "id", void 0);
__decorate([
    dto_1.ScrubIn()
], User.prototype, "username", void 0);
__decorate([
    dto_1.ScrubOut()
], User.prototype, "password", void 0);
__decorate([
    dto_1.Validate({
        type: 'string'
    })
], User.prototype, "typeTestString", void 0);
__decorate([
    dto_1.Validate({
        type: 'number'
    })
], User.prototype, "typeTestNumber", void 0);
__decorate([
    dto_1.Validate({
        type: 'object'
    })
], User.prototype, "typeTestObject", void 0);
__decorate([
    dto_1.Validate({
        type: 'array'
    })
], User.prototype, "typeTestArray", void 0);
__decorate([
    dto_1.Validate({
        minLength: 3,
        maxLength: 5
    })
], User.prototype, "lengthTest", void 0);
__decorate([
    dto_1.Validate({
        min: 3,
        max: 5
    })
], User.prototype, "valueTest", void 0);
__decorate([
    dto_1.Validate({
        pattern: /^[\w\d]+$/
    })
], User.prototype, "patternTest1", void 0);
__decorate([
    dto_1.Validate({
        pattern: /[^\w\d\s]/
    })
], User.prototype, "patternTest2", void 0);
__decorate([
    dto_1.Validate({
        values: 'M,F'
    })
], User.prototype, "enumTest", void 0);
__decorate([
    dto_1.Validate({
        type: ['number', 'this is a custom error']
    })
], User.prototype, "customErrorTest", void 0);
exports.User = User;
class UserService {
    static resolveAuth(auth) {
        let user = new User();
        user.id = auth;
        user.password = 'password';
        user.email = 'email@gmail.com';
        return user;
    }
}
__decorate([
    auth_1.AuthHandler('User'),
    __param(0, injectables_1.Header('Authorization'))
], UserService, "resolveAuth", null);
exports.UserService = UserService;
class UserRouter {
    static updateUser(user, update) {
        return update;
    }
}
__decorate([
    route_1.Route('PUT', '/user'),
    dto_1.ResponseType(User),
    __param(0, auth_1.Auth('User')),
    __param(1, injectables_1.Body(User))
], UserRouter, "updateUser", null);
exports.UserRouter = UserRouter;
