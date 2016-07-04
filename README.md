[<img src="https://s32.postimg.org/4n792cr79/restkitkoa.png" height="100"/>](https://github.com/iamchairs/koakit)

Koa support for [Restkit](https://github.com/iamchairs/restkit).

## Install

```
npm install koakit --save
```

## Start

```typescript
import {Koakit} from 'koakit';

Koakit.start();
```

## Use

```typescript
import {Route, Param, Query, Header, Body} from 'koakit';

export class UserRouter {
  @Route('PUT', '/user/:id')
  public updateUser(@Param('id') id: string, @Query('foo') foo: string, @Header('Authorization') auth: string, @Body() update: any) {
  }
}
```

## More Links

[Restkit](https://github.com/iamchairs/restkit)

[Github](https://github.com/iamchairs/koakit)

[Issues](https://github.com/iamchairs/koakit/issues)

[NPM](https://www.npmjs.com/package/koakit)

[Twitter](https://twitter.com/micahwllmsn)