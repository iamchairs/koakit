"use strict";
(function (ResponseType) {
    ResponseType[ResponseType["Success"] = 0] = "Success";
    ResponseType[ResponseType["Error"] = 1] = "Error";
})(exports.ResponseType || (exports.ResponseType = {}));
var ResponseType = exports.ResponseType;
;
class Response {
    constructor(httpCode, data) {
        this.httpCode = httpCode;
        this.data = data;
        if (httpCode >= 400) {
            this.type = ResponseType.Error;
        }
        else {
            this.type = ResponseType.Success;
        }
    }
}
exports.Response = Response;
class ResponseService {
    static convertSuccessResponse(data) {
        if (data instanceof Response) {
            return data;
        }
        return new Response(data !== undefined ? 200 : 204, data);
    }
    static convertErrorResponse(data) {
        if (data instanceof Response) {
            return data;
        }
        else if (data instanceof Error) {
            data = data.stack.toString();
        }
        return new Response(500, data);
    }
}
exports.ResponseService = ResponseService;
