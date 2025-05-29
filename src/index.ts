import { BaseController } from '@toikit/toikit';

export class SerializerProvider {
  res: any;

  setResponse(res){
    this.res = res;
  }

  success(data) {
    this.res.status(200).json(data);
  }

  error(errors, code: number = 422) {
    this.res.status(code).json(errors);
  }
  
  exception(e, data = {}) {
    console.log(e);
    this.res.status(500).json(data);
  }
}

export class SerializerController extends BaseController {
  protected serializer: any;
  protected request: any;
  protected response: any;

  getSerializer(){
    return new SerializerProvider();
  }
  
  async handle(method, req, res){
    this.request = req;
    this.response = res;
    this.serializer = this.getSerializer();

    // Perform any necessary operations before the controller action
    // For example, logging or validating user authentication
    await this.serializer.setResponse(res);

    try {
      super.handle(method, req, res);
    } catch (e) {
      this.serializer.exception(e);
    }
  }
}