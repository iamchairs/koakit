"use strict";
const reflect_1 = require('../reflect');
function Validate(rules) {
    return function (object, property) {
        let dto = reflect_1.Reflect.getMetadata('DTO', object) || [];
        if (dto.indexOf(property) === -1) {
            dto.push(property);
        }
        reflect_1.Reflect.defineMetadata('DTO', dto, object);
        for (var key in rules) {
            if (key[0] !== '$') {
                let val = rules[key];
                if (typeof val !== 'object') {
                    rules[key] = [val, null];
                }
                else if (!val.hasOwnProperty('length')) {
                    rules[key] = [val, null];
                }
            }
        }
        let validation = reflect_1.Reflect.getMetadata('Validation', object, property) || [];
        validation.push(rules);
        reflect_1.Reflect.defineMetadata('Validation', validation, object, property);
    };
}
exports.Validate = Validate;
