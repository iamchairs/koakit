"use strict";
const reflect_1 = require('../reflect');
const index_1 = require('../index');
const manager_1 = require('../dto/manager');
const response_1 = require('./response');
class ResponseHandlerService {
    static handleResponse(scope, route, methodResponse, expressResponse) {
        if (methodResponse && methodResponse.then) {
            return methodResponse.then((payload) => {
                let response = this.convertSuccessResponse(payload);
                this.sendResponse(scope, route, response, expressResponse);
            }).catch((payload) => {
                let response = this.convertErrorResponse(payload);
                this.sendResponse(scope, route, response, expressResponse);
            });
        }
        else {
            let response = this.convertSuccessResponse(methodResponse);
            this.sendResponse(scope, route, response, expressResponse);
        }
    }
    static convertSuccessResponse(data) {
        if (data instanceof response_1.Response) {
            return data;
        }
        return new response_1.Response(data !== undefined ? 200 : 204, data);
    }
    static convertErrorResponse(data) {
        if (data instanceof response_1.Response) {
            return data;
        }
        else if (data instanceof Error) {
            data = data.stack.toString();
        }
        return new response_1.Response(500, data);
    }
    static sendResponse(scope, route, response, expressResponse) {
        let object = route.object;
        let key = route.key;
        let responseType = reflect_1.Reflect.getMetadata('ResponseType', object, key);
        if (responseType) {
            manager_1.DTOManager.scrubOut(response.data, responseType);
        }
        index_1.default.server.sendResponse(scope, route, response, expressResponse);
    }
}
exports.ResponseHandlerService = ResponseHandlerService;
