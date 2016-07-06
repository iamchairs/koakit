declare var require: any;

let koa = require('koa');
let routerPackage = require('koa-router');

import {Reflect} from 'restkit/reflect';
import {RestkitServer} from 'restkit/server';
import {RestkitRouter} from 'restkit/router';
import {IRoute} from 'restkit/route';
import {Response} from 'restkit/response';
import {RouteManager} from 'restkit/route';

import {KoaRouter} from './router';

export class KoaServer extends RestkitServer {
  public routerPackage: any;
  
  constructor() {
    super();

    this.package = koa;
    this.application = new koa();
    this.routerPackage = routerPackage;
    
    this.baseRouter = this.createRouter('/');
  }

  public createRouter(mount: string): KoaRouter {
    let router = this.routerPackage();

    return new KoaRouter(mount, router);
  }

  public use(... args: any[]) {
    return this.application.use.apply(this.application, args);
  }

  public listen (... args: any[]) {
    return this.listenHandle = this.application.listen.apply(this.application, args);
  }

  public stop(... args: any[]) {
    return this.listenHandle.stop.apply(this.application, args);
  }
  
  public getRequestHandler(route: IRoute): Function {
    return (ctx: any) => {
      return RouteManager.runRoute(route, ctx).then((response: Response) => {
        this.sendResponse(route, ctx, response);
      });
    }
  }
  
  public sendResponse(route: IRoute, ctx: any, response: Response) {
    ctx.body = response.data;
    ctx.status = response.httpCode;    
  }
}