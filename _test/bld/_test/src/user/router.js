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
class User {
}
__decorate([
    index_3.Validate({
        required: true
    }), 
    __metadata('design:type', String)
], User.prototype, "id", void 0);
__decorate([
    index_3.ScrubIn(), 
    __metadata('design:type', String)
], User.prototype, "username", void 0);
__decorate([
    index_3.ScrubOut(), 
    __metadata('design:type', String)
], User.prototype, "password", void 0);
__decorate([
    index_3.Validate({
        type: 'string'
    }), 
    __metadata('design:type', String)
], User.prototype, "typeTestString", void 0);
__decorate([
    index_3.Validate({
        type: 'number'
    }), 
    __metadata('design:type', Number)
], User.prototype, "typeTestNumber", void 0);
__decorate([
    index_3.Validate({
        type: 'object'
    }), 
    __metadata('design:type', Object)
], User.prototype, "typeTestObject", void 0);
__decorate([
    index_3.Validate({
        type: 'array'
    }), 
    __metadata('design:type', Array)
], User.prototype, "typeTestArray", void 0);
__decorate([
    index_3.Validate({
        minLength: 3,
        maxLength: 5
    }), 
    __metadata('design:type', String)
], User.prototype, "lengthTest", void 0);
__decorate([
    index_3.Validate({
        min: 3,
        max: 5
    }), 
    __metadata('design:type', Number)
], User.prototype, "valueTest", void 0);
__decorate([
    index_3.Validate({
        pattern: /^[\w\d]+$/
    }), 
    __metadata('design:type', String)
], User.prototype, "patternTest1", void 0);
__decorate([
    index_3.Validate({
        pattern: /[^\w\d\s]/
    }), 
    __metadata('design:type', String)
], User.prototype, "patternTest2", void 0);
__decorate([
    index_3.Validate({
        values: 'M,F'
    }), 
    __metadata('design:type', String)
], User.prototype, "enumTest", void 0);
__decorate([
    index_3.Validate({
        type: ['number', 'this is a custom error']
    }), 
    __metadata('design:type', Number)
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
    index_2.Resolver('User'),
    __param(0, index_4.Header('Authorization')), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [String]), 
    __metadata('design:returntype', User)
], UserService, "resolveAuth", null);
exports.UserService = UserService;
class UserRouter {
    static updateUser(user, update) {
        return update;
    }
}
__decorate([
    index_1.Route('PUT', '/user'),
    index_3.ResponseType(User),
    __param(0, index_2.Resource('User')),
    __param(1, index_4.Body(User)), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [User, User]), 
    __metadata('design:returntype', void 0)
], UserRouter, "updateUser", null);
exports.UserRouter = UserRouter;
