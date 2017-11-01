import BaseController from "../controllers/baseController";
import * as express from "express";
import * as _ from "lodash"

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        res.render('home/home.pug', { name: 'Haha', age: 3, youAreUsingPug: true });
    }
}

export default HomeController;