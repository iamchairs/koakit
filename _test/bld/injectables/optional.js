"use strict";
const route_1 = require('restkit/route');
class OptionalResolver {
    getOptionalParts(name) {
        let optional = false;
        let defaultValue;
        if (name[name.length - 1] === '?') {
            optional = true;
            name = name.substr(0, name.length - 1);
        }
        else {
            let defaultParts = name.split('=');
            if (defaultParts.length === 2) {
                name = defaultParts[0];
                defaultValue = defaultParts[1];
            }
        }
        return {
            name: name,
            optional: optional,
            default: defaultValue
        };
    }
    optionallyResolve(optionalParts, val, type) {
        if (val) {
            return Promise.resolve(val);
        }
        else {
            if (optionalParts.optional) {
                return Promise.resolve();
            }
            else if (optionalParts.default !== undefined) {
                return Promise.resolve(optionalParts.default);
            }
            else {
                return Promise.reject(new route_1.Response(400, `Required ${type} missing: ${optionalParts.name}`));
            }
        }
    }
}
exports.OptionalResolver = OptionalResolver;
