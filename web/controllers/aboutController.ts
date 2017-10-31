import BaseController from "../controllers/baseController";
import * as express from "express";

class AboutController extends BaseController {
    constructor(){
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        res.render('about/about.ejs');
    }

    loadOtherView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        res.render('about/aboutOther.ejs');
    }
}

export default AboutController;