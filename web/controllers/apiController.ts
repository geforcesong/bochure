import BaseController from "../controllers/baseController";
import * as express from "express";

class ApiController extends BaseController {
    constructor() {
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        const options = this.initialize(req, res, next);
        var data = {
            list: [
                { name: 'George', age: 29 },
                { name: 'Jenny', age: 32 }
            ]
        }
        this.sendJson(data);
    }
}

export default ApiController;