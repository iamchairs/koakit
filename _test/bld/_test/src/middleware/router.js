"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const index_1 = require('../../../index');
const index_2 = require('../../../index');
let middlewareValue = '';
class MiddlewareService {
    static routerMiddleware(ctx, koaNext, expressNext) {
        middlewareValue = 'router';
        if (expressNext) {
            expressNext();
        }
        else if (koaNext) {
            return koaNext();
        }
    }
    static routeMiddleware(ctx, koaNext, expressNext) {
        middlewareValue = 'route';
        if (expressNext) {
            expressNext();
        }
        else if (koaNext) {
            return koaNext();
        }
    }
}
exports.MiddlewareService = MiddlewareService;
let MiddlewareRouter = class MiddlewareRouter {
    static routerMiddleware() {
        return middlewareValue;
    }
    static routeMiddleware() {
        return middlewareValue;
    }
};
__decorate([
    index_1.Route('GET', '/router')
], MiddlewareRouter, "routerMiddleware", null);
__decorate([
    index_1.Route('GET', '/route'),
    index_2.RouteMiddleware(MiddlewareService.routeMiddleware)
], MiddlewareRouter, "routeMiddleware", null);
MiddlewareRouter = __decorate([
    index_1.Router('/middleware'),
    index_2.RouterMiddleware(MiddlewareService.routerMiddleware)
], MiddlewareRouter);
exports.MiddlewareRouter = MiddlewareRouter;
