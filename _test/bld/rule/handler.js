"use strict";
const reflect_1 = require('../reflect');
const service_1 = require('./service');
function RuleHandler(name) {
    return function (object, method) {
        let handler = {
            name: name,
            object: object,
            method: method
        };
        service_1.RuleService.registerRuleHandler(handler);
        reflect_1.Reflect.defineMetadata('RuleHandler', handler, object, method);
    };
}
exports.RuleHandler = RuleHandler;
