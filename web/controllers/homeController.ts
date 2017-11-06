import BaseController from "../controllers/baseController";
import HomeModel from '../models/home/HomeModel';
import * as express from "express";
import * as _ from "lodash"

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        const homeModel: HomeModel = new HomeModel();
        this.renderPage('home/home.pug', homeModel);
    }
}

export default HomeController;