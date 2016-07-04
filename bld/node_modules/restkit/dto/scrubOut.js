"use strict";
const reflect_1 = require('../reflect');
function ScrubOut(tags = {}) {
    return function (object, property) {
        let dto = reflect_1.Reflect.getMetadata('DTO', object) || [];
        if (dto.indexOf(property) === -1) {
            dto.push(property);
        }
        reflect_1.Reflect.defineMetadata('DTO', dto, object);
        reflect_1.Reflect.defineMetadata('ScrubOut', tags, object, property);
    };
}
exports.ScrubOut = ScrubOut;
