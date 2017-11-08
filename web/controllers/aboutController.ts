import BaseController from "../controllers/baseController";
import * as express from "express";
import AboutModel from '../models/about/AboutModel';

class AboutController extends BaseController {
    constructor(){
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        const aboutModel: AboutModel = new AboutModel();
        this.renderPage('about/about.pug', aboutModel);
    }
}

export default AboutController;