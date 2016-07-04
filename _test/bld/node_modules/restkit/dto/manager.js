"use strict";
const reflect_1 = require('../reflect');
class DTOManager {
    static validate(data, dto) {
        let dtoProperties = reflect_1.Reflect.getMetadata('DTO', dto.prototype);
        for (var i = 0; i < dtoProperties.length; i++) {
            let dtoProperty = dtoProperties[i];
            let validationRules = reflect_1.Reflect.getMetadata('Validation', dto.prototype, dtoProperty);
            if (validationRules) {
                for (let k = 0; k < validationRules.length; k++) {
                    let validationRuleSet = validationRules[k];
                    let validators = [];
                    let validationTuples = [
                        ['required', this.validateRequired],
                        ['type', this.validateType],
                        ['minLength', this.validateMinLength],
                        ['maxLength', this.validateMaxLength],
                        ['min', this.validateMin],
                        ['max', this.validateMax],
                        ['pattern', this.validatePattern],
                        ['values', this.validateValues]
                    ];
                    for (let j = 0; j < validationTuples.length; j++) {
                        let validationTuple = validationTuples[j];
                        let key = validationTuple[0];
                        let method = validationTuple[1];
                        if (validationRuleSet.hasOwnProperty(key)) {
                            validators.push(validationTuple);
                        }
                    }
                    for (let j = 0; j < validators.length; j++) {
                        let validator = validators[j];
                        let validatorKey = validator[0];
                        let validatorValue = validationRuleSet[validatorKey][0];
                        let validatorErr = validationRuleSet[validatorKey][1];
                        let validatorMethod = validator[1];
                        let err = validatorMethod.call(this, data, dtoProperty, validatorValue, validatorErr);
                        if (err) {
                            return err;
                        }
                    }
                }
            }
        }
        return null;
    }
    static scrubIn(data, dto) {
        let dtoProperties = reflect_1.Reflect.getMetadata('DTO', dto.prototype);
        if (dtoProperties) {
            for (var i = 0; i < dtoProperties.length; i++) {
                let dtoProperty = dtoProperties[i];
                let scrubIn = reflect_1.Reflect.getMetadata('ScrubIn', dto.prototype, dtoProperty);
                if (scrubIn) {
                    delete data[dtoProperty];
                }
            }
        }
    }
    static scrubOut(data, dto) {
        let dtoProperties = reflect_1.Reflect.getMetadata('DTO', dto.prototype);
        if (dtoProperties) {
            for (var i = 0; i < dtoProperties.length; i++) {
                let dtoProperty = dtoProperties[i];
                let scrubOut = reflect_1.Reflect.getMetadata('ScrubOut', dto.prototype, dtoProperty);
                if (scrubOut) {
                    delete data[dtoProperty];
                }
            }
        }
    }
    static validateRequired(data, property, value, err) {
        if (data.hasOwnProperty(property)) {
            return null;
        }
        return err || `Required property missing: ${property}`;
    }
    static validateType(data, property, type, err) {
        if (data.hasOwnProperty(property)) {
            let isType = false;
            switch (type) {
                case 'string':
                    isType = typeof data[property] === 'string';
                    break;
                case 'number':
                    isType = typeof data[property] === 'number';
                    break;
                case 'object':
                    if (typeof data[property] === 'object') {
                        if (!data[property].hasOwnProperty('length')) {
                            isType = true;
                        }
                    }
                    break;
                case 'array':
                    if (typeof data[property] === 'object') {
                        if (data[property].hasOwnProperty('length')) {
                            isType = true;
                        }
                    }
                    break;
                default:
                    return 'Implementation Error: unknown type ' + type;
            }
            if (isType) {
                return null;
            }
            return err || `${property} was expected to be ${type}`;
        }
        return null;
    }
    static validateMinLength(data, property, length, err) {
        if (data[property] && data[property].length) {
            if (data[property].length >= length) {
                return null;
            }
            return err || `${property} expected to have a minimum length of ${length}`;
        }
        return null;
    }
    static validateMaxLength(data, property, length, err) {
        if (data[property] && data[property].length) {
            if (data[property].length < length) {
                return null;
            }
            return err || `${property} exceeds the maximum length of ${length}`;
        }
        return null;
    }
    static validateMin(data, property, value, err) {
        if (data.hasOwnProperty(property)) {
            if (+data[property] >= value) {
                return null;
            }
            return err || `${property} must be at least ${value}`;
        }
        return null;
    }
    static validateMax(data, property, value, err) {
        if (data.hasOwnProperty(property)) {
            if (+data[property] < value) {
                return null;
            }
            return err || `${property} cannot exceed ${value}`;
        }
        return null;
    }
    static validatePattern(data, property, pattern, err) {
        if (data.hasOwnProperty(property)) {
            if (pattern.test(data[property])) {
                return null;
            }
            return err || `${property} does not satisfy pattern ${pattern}`;
        }
        return null;
    }
    static validateValues(data, property, values, err) {
        let valueArr = values.split(',');
        if (data.hasOwnProperty(property)) {
            for (var i = 0; i < valueArr.length; i++) {
                if (valueArr[i].trim() === data[property]) {
                    return null;
                }
            }
            return err || `${data[property]} in ${property} is not in the list of accepted values: ${values}`;
        }
        return null;
    }
}
exports.DTOManager = DTOManager;
