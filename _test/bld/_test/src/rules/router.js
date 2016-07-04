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
const rule_1 = require('restkit/rule');
const auth_1 = require('restkit/auth');
const injectables_1 = require('../../../injectables');
class RuleService {
    static failRule() {
        return Promise.reject('bar');
    }
    static failRuleCustomResponse() {
        return Promise.resolve(new route_1.Response(400, 'Test'));
    }
    static failRuleCustomResponseRejected() {
        return Promise.reject(new route_1.Response(400, 'Test'));
    }
    static passRule() {
        return Promise.resolve();
    }
    static complexRule(auth, a, b, c, d) {
        return Promise.reject(auth + '' + a + '' + b + '' + c + '' + d.d);
    }
}
__decorate([
    rule_1.RuleHandler('FailRule')
], RuleService, "failRule", null);
__decorate([
    rule_1.RuleHandler('FailRuleCustomResponse')
], RuleService, "failRuleCustomResponse", null);
__decorate([
    rule_1.RuleHandler('FailRuleCustomResponseRejected')
], RuleService, "failRuleCustomResponseRejected", null);
__decorate([
    rule_1.RuleHandler('PassRule')
], RuleService, "passRule", null);
__decorate([
    rule_1.RuleHandler('ComplexRule'),
    __param(0, auth_1.Auth()),
    __param(1, injectables_1.Param('a')),
    __param(2, injectables_1.Query('b')),
    __param(3, injectables_1.Header('c')),
    __param(4, injectables_1.Body())
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
    route_1.Route('GET', '/rules/fail'),
    rule_1.Rule('FailRule')
], RuleRouter, "failRule", null);
__decorate([
    route_1.Route('GET', '/rules/failcustomresponse'),
    rule_1.Rule('FailRuleCustomResponse')
], RuleRouter, "failRuleCustomResponse", null);
__decorate([
    route_1.Route('GET', '/rules/failcustomresponserejected'),
    rule_1.Rule('FailRuleCustomResponseRejected')
], RuleRouter, "failRuleCustomResponseRejected", null);
__decorate([
    route_1.Route('GET', '/rules/pass'),
    rule_1.Rule('PassRule')
], RuleRouter, "passRule", null);
__decorate([
    route_1.Route('GET', '/rules/or/pass'),
    rule_1.Rule('FailRule', 'PassRule')
], RuleRouter, "passOr", null);
__decorate([
    route_1.Route('GET', '/rules/or/fail'),
    rule_1.Rule('FailRule', 'FailRule')
], RuleRouter, "failOr", null);
__decorate([
    route_1.Route('GET', '/rules/and/pass'),
    rule_1.Rule('PassRule'),
    rule_1.Rule('PassRule')
], RuleRouter, "passAnd", null);
__decorate([
    route_1.Route('GET', '/rules/and/fail'),
    rule_1.Rule('PassRule'),
    rule_1.Rule('FailRule')
], RuleRouter, "failAnd", null);
__decorate([
    route_1.Route('POST', '/rules/complex/:a'),
    rule_1.Rule('ComplexRule')
], RuleRouter, "complexRule", null);
exports.RuleRouter = RuleRouter;
