"use strict";
const reflect_1 = require('../reflect');
function ResponseType(dto) {
    return function (object, property) {
        reflect_1.Reflect.defineMetadata('ResponseType', dto, object, property);
    };
}
exports.ResponseType = ResponseType;
