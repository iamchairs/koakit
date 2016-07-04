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
class RuleService {
    static failRule() {
        return Promise.reject('bar');
    }
    static failRuleCustomResponse() {
        return Promise.resolve(new index_1.Response(400, 'Test'));
    }
    static failRuleCustomResponseRejected() {
        return Promise.reject(new index_1.Response(400, 'Test'));
    }
    static passRule() {
        return Promise.resolve();
    }
    static complexRule(auth, a, b, c, d) {
        return Promise.reject(auth + '' + a + '' + b + '' + c + '' + d.d);
    }
}
__decorate([
    index_2.RuleHandler('FailRule')
], RuleService, "failRule", null);
__decorate([
    index_2.RuleHandler('FailRuleCustomResponse')
], RuleService, "failRuleCustomResponse", null);
__decorate([
    index_2.RuleHandler('FailRuleCustomResponseRejected')
], RuleService, "failRuleCustomResponseRejected", null);
__decorate([
    index_2.RuleHandler('PassRule')
], RuleService, "passRule", null);
__decorate([
    index_2.RuleHandler('ComplexRule'),
    __param(0, index_3.Auth()),
    __param(1, index_4.Param('a')),
    __param(2, index_4.Query('b')),
    __param(3, index_4.Header('c')),
    __param(4, index_4.Body())
], RuleService, "complexRule", null);
exports.RuleService = RuleService;
class RuleRouter {
    static failRule() {
        return 'foo';
    }
    static failRuleCustomResponse() {
        return 'foo';
    }
    static failRuleCustomResponseRejected() {
        return 'foo';
    }
    static passRule() {
        return 'foo';
    }
    static passOr() {
        return 'foo';
    }
    static failOr() {
        return 'foo';
    }
    static passAnd() {
        return 'foo';
    }
    static failAnd() {
        return 'foo';
    }
    static complexRule() {
        return 'foo';
    }
}
__decorate([
    index_1.Route('GET', '/rules/fail'),
    index_2.Rule('FailRule')
], RuleRouter, "failRule", null);
__decorate([
    index_1.Route('GET', '/rules/failcustomresponse'),
    index_2.Rule('FailRuleCustomResponse')
], RuleRouter, "failRuleCustomResponse", null);
__decorate([
    index_1.Route('GET', '/rules/failcustomresponserejected'),
    index_2.Rule('FailRuleCustomResponseRejected')
], RuleRouter, "failRuleCustomResponseRejected", null);
__decorate([
    index_1.Route('GET', '/rules/pass'),
    index_2.Rule('PassRule')
], RuleRouter, "passRule", null);
__decorate([
    index_1.Route('GET', '/rules/or/pass'),
    index_2.Rule('FailRule', 'PassRule')
], RuleRouter, "passOr", null);
__decorate([
    index_1.Route('GET', '/rules/or/fail'),
    index_2.Rule('FailRule', 'FailRule')
], RuleRouter, "failOr", null);
__decorate([
    index_1.Route('GET', '/rules/and/pass'),
    index_2.Rule('PassRule'),
    index_2.Rule('PassRule')
], RuleRouter, "passAnd", null);
__decorate([
    index_1.Route('GET', '/rules/and/fail'),
    index_2.Rule('PassRule'),
    index_2.Rule('FailRule')
], RuleRouter, "failAnd", null);
__decorate([
    index_1.Route('POST', '/rules/complex/:a'),
    index_2.Rule('ComplexRule')
], RuleRouter, "complexRule", null);
exports.RuleRouter = RuleRouter;
