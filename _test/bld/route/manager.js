"use strict";
const reflect_1 = require('../reflect');
const error_1 = require('../error');
var path = require('path');
;
class RouteManager {
    static registerRouter(object, mount) {
        this.routers.push({
            mount: mount,
            object: object,
            router: null
        });
    }
    static registerRoute(method, path, object, key) {
        if (object.hasOwnProperty(key)) {
            let existingRoute = this.getRoute(method, path);
            if (!existingRoute) {
                this.routes.push({
                    method: method,
                    path: path,
                    object: object,
                    key: key
                });
            }
            else {
                let error = `Unable to register route: ${method} > ${path} to ${object.prototype.constructor.name}.${key}. This path is already registered to ${existingRoute.object.prototype.constructor.name}.${key}`;
                error_1.fatal(new Error(error));
            }
        }
        else {
            let error = `Unable to register route: ${method} > ${path} to ${object.prototype.constructor.name}.${key}. ${key} does not exist on ${object.prototype.constructor.name}. Instead of calling RouteManager.registerRoute directly, use the @Route decorator.`;
            error_1.fatal(new Error(error));
        }
    }
    static bindRoutes(server) {
        this.routers.forEach((router) => {
            let routerMiddleware = reflect_1.Reflect.getMetadata('Middlewares', router.object) || [];
            router.router = server.createRouter(router.mount);
            routerMiddleware.forEach((middleware) => {
                router.router.use(middleware);
            });
        });
        this.routes.forEach(route => {
            console.log(`[DEBUG] Bound route: ${route.method} > ${route.path} to ${route.object.prototype.constructor.name}.${route.key}.`);
            let routerBinding = this.getRouterByClass(route.object);
            let router;
            if (routerBinding) {
                router = routerBinding.router;
            }
            else {
                router = server.router;
            }
            let routeMiddleware = reflect_1.Reflect.getMetadata('Middlewares', route.object, route.key) || [];
            routeMiddleware.forEach((middleware) => {
                router.use(route.path, middleware);
            });
            let expressMethod = this.getExpressMethod(router, route.method);
            expressMethod.call(router, route.path, server.getRequestHandler(route));
        });
        this.routers.forEach((router) => {
            router.router.bindSelf(server.router);
        });
        server.router.bindSelf(server);
    }
    static bindStaticPaths(server, staticPaths) {
        staticPaths.forEach((path) => {
            server.use(path.uri, server.router.static(path.path));
        });
    }
    static bindStaticFiles(server, staticPaths) {
        staticPaths.forEach((p) => {
            server.router.get(p.uri, (req, res) => {
                res.sendFile(path.resolve(__dirname + '/' + p.path));
            });
        });
    }
    static getRoute(method, path) {
        let route = null;
        this.routes.forEach((rt) => {
            if (rt.method === method && rt.path === path) {
                route = rt;
            }
        });
        return route;
    }
    static getRouterByClass(object) {
        for (var i = 0; i < this.routers.length; i++) {
            if (this.routers[i].object === object) {
                return this.routers[i];
            }
        }
        return null;
    }
    static getRouteByClass(object, method) {
        let route = null;
        this.routes.forEach((rt) => {
            if (rt.object === object && rt.key === method) {
                route = rt;
            }
        });
        return route;
    }
    static getExpressMethod(application, method) {
        switch (method) {
            case 'GET':
                return application.get;
            case 'PUT':
                return application.put;
            case 'POST':
                return application.post;
            case 'DELETE':
                return application.delete;
        }
        return;
    }
}
RouteManager.routers = [];
RouteManager.routes = [];
exports.RouteManager = RouteManager;
