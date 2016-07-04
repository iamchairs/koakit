Koakit
==========

Koa support for Restkit.

## Install

```
npm install restkit --save
npm install koakit --save
```

## Start

```typescript
import {Restkit} from 'restkit';
import {KoaServer} from 'koakit';

Restkit.start({
  server: new KoaServer()
});
```

## Use

```typescript
import {Route} from 'restkit';

import {Param, Query, Header, Body} from 'koakit';

export class UserRouter {
  @Route('PUT', '/user/:id')
  public updateUser(@Param('id') id: string, @Query('foo') foo: string, @Header('Authorization') auth: string, @Body() update: any) {
  }
}
```

## More Links

[Restkit](https://github.com/iamchairs/restkit)

[Github](https://github.com/iamchairs/expresskit)

[Issues](https://github.com/iamchairs/expresskit/issues)

[NPM](https://www.npmjs.com/package/expresskit)

[Twitter](https://twitter.com/micahwllmsn)