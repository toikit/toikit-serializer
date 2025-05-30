"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerController = exports.SerializerProvider = void 0;
const toikit_1 = require("@toikit/toikit");
class SerializerProvider {
    setResponse(res) {
        this.res = res;
    }
    success(data) {
        this.res.status(200).json(data);
    }
    error(errors, code = 422) {
        this.res.status(code).json(errors);
    }
    exception(e, data = {}) {
        console.log(e);
        this.res.status(500).json(data);
    }
}
exports.SerializerProvider = SerializerProvider;
class SerializerController extends toikit_1.BaseController {
    getSerializer() {
        return new SerializerProvider();
    }
    handle(method, req, res) {
        try {
            this.request = req;
            this.response = res;
            this.serializer = this.getSerializer();
            this.serializer.setResponse(res);
            super.handle(method, req, res);
        }
        catch (e) {
            this.serializer.exception(e);
        }
    }
}
exports.SerializerController = SerializerController;
//# sourceMappingURL=index.js.map