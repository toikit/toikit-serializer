import { BaseController } from '@toikit/toikit';
export declare class SerializerProvider {
    res: any;
    setResponse(res: any): void;
    success(data: any): void;
    error(errors: any, code?: number): void;
    exception(e: any, data?: {}): void;
}
export declare class SerializerController extends BaseController {
    protected serializer: any;
    protected request: any;
    protected response: any;
    getSerializer(): SerializerProvider;
    handle(method: any, req: any, res: any): void;
}
