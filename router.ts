import {RestkitRouter} from 'restkit/router';

export class KoaRouter extends RestkitRouter {
  public bindSelf(parent: RestkitRouter) {
    if(parent.mount) {
      parent.router.use(this.mount, this.router.routes());
    } else {
      parent.use(this.router.routes());
    }
  }
  
  public use(... args: any[]) {
    return this.router.use.apply(this.router, args);  
  }
  
  public static (... args: any[]) {
    return this.router.static.apply(this.router, args);
  }

  public get (... args: any[]) {
    return this.router.get.apply(this.router, args);    
  }
  
  public put (... args: any[]) {
    return this.router.put.apply(this.router, args);
  }

  public post (... args: any[]) {
    return this.router.post.apply(this.router, args);
  }

  public delete (... args: any[]) {
    return this.router.delete.apply(this.router, args);
  }
}