declare var require: any;

let koa = require('koa');
let routerPackage = require('koa-router');

import {Reflect} from 'restkit/reflect';
import {RestkitServer} from 'restkit/server';
import {RestkitRouter} from 'restkit/router';
import {IRoute, Response, ResponseService} from 'restkit/route';
import {RuleService} from 'restkit/rule';
import {InjectorService} from 'restkit/injector';
import {DTOManager} from 'restkit/dto';

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
      let rules = Reflect.getMetadata('Rules', route.object, route.key) || [];

      return RuleService.runRules(rules, ctx).then(() => {
        return InjectorService.run(route.object, route.key, ctx).then((response: Response) => {
          return this.sendResponse(route, ctx, ResponseService.convertSuccessResponse(response));
        }).catch((response: Response) => {
          return this.sendResponse(route, ctx, ResponseService.convertErrorResponse(response));
        });
      }).catch((response: Response) => {
        return this.sendResponse(route, ctx, ResponseService.convertErrorResponse(response));
      });
      
    }
  }
  
  public sendResponse(route: IRoute, ctx: any, response: Response) {
    let object = route.object;
    let key = route.key;

    let responseType = Reflect.getMetadata('ResponseType', object, key);
    if(responseType) {
      DTOManager.scrubOut(response.data, responseType);
    }
    
    ctx.body = response.data;
    ctx.status = response.httpCode; 
  }
}