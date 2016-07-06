"use strict";
let koa = require('koa');
let routerPackage = require('koa-router');
const server_1 = require('restkit/server');
const route_1 = require('restkit/route');
const router_1 = require('./router');
class KoaServer extends server_1.RestkitServer {
    constructor() {
        super();
        this.package = koa;
        this.application = new koa();
        this.routerPackage = routerPackage;
        this.baseRouter = this.createRouter('/');
    }
    createRouter(mount) {
        let router = this.routerPackage();
        return new router_1.KoaRouter(mount, router);
    }
    use(...args) {
        return this.application.use.apply(this.application, args);
    }
    listen(...args) {
        return this.listenHandle = this.application.listen.apply(this.application, args);
    }
    stop(...args) {
        return this.listenHandle.stop.apply(this.application, args);
    }
    getRequestHandler(route) {
        return (ctx) => {
            return route_1.RouteManager.runRoute(route, ctx).then((response) => {
                this.sendResponse(route, ctx, response);
            });
        };
    }
    sendResponse(route, ctx, response) {
        ctx.body = response.data;
        ctx.status = response.httpCode;
    }
}
exports.KoaServer = KoaServer;
