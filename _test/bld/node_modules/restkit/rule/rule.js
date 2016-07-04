"use strict";
const reflect_1 = require('../reflect');
function Rule(...ruleNames) {
    return function (object, method) {
        let rules = reflect_1.Reflect.getMetadata('Rules', object, method) || [];
        rules.push(ruleNames);
        reflect_1.Reflect.defineMetadata('Rules', rules, object, method);
    };
}
exports.Rule = Rule;
