import {InjectorService, IInjectable, IInjectionConfig, IInjectionResolver} from 'restkit/injector';
import {OptionalResolver} from './optional';

export function Header(name: string) {
  return function(object: any, method: string, index: number) {
    let injectable: IInjectable = {
      index: index,
      arguments: [name]
    };

    let injectionConfig: IInjectionConfig = {
      injectionResolver: new HeaderInjectionResolver(),
      injectable: injectable
    };

    InjectorService.registerInjection(object, method, injectionConfig);
  }
}

export class HeaderInjectionResolver extends OptionalResolver implements IInjectionResolver {

  public resolve(injectable: IInjectable, ctx: any): Promise<any> {
    let paramName = injectable.arguments[0];
    let optionalParts = this.getOptionalParts(paramName);
    let val = ctx.header[optionalParts.name.toLowerCase()];

    return this.optionallyResolve(optionalParts, val, 'header');
  }
  
}