import {Restkit} from 'restkit';
import {IStaticUriPath} from 'restkit';
import {KoaServer} from './server';

export interface IKoakitConfig {
  server?: any;
  port?: number;
  timezone?: string;
  staticFiles?: IStaticUriPath[];
  staticPaths?: IStaticUriPath[];
  middleware?: any[];
}

export class Koakit {
  public static start(config: IKoakitConfig = {}) {
    config.server = config.server || new KoaServer();
    Restkit.start(<any>config);
  }

  public static stop() {
    Restkit.stop();
  }
}