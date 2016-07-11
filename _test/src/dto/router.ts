import {Route, Response} from '../../../index';
import {ResponseCode, ErrorCode} from '../../../index';
import {Context} from '../../../index';
import {Param, Query, Body} from '../../../index';
import {GET, PUT, PATCH, POST, DELETE} from '../../../index';
import {Integer} from '../../../index';

export class DTORouter {
    @Route('GET', '/dto/string/:int')
    public static stringType(@Param('int') num: string) {
      return typeof num === 'string';
    }

    @Route('GET', '/dto/int/:str')
    public static intType(@Param('str') str: Integer) {
      return str instanceof Integer;
    }

    @Route('GET', '/dto/obj')
    public static bodyType(@Body() bd: Object) {
        return bd instanceof Object;
    }

    @Route('GET', '/dto/arr')
    public static arrType(@Body() bd: Object) {
        return bd instanceof Array;
    }
}