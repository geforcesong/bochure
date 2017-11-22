'use strict';

import * as express from "express";
import Validator from "../common/validator";
import HomeController from "../controllers/homeController";
import AboutController from "../controllers/aboutController";
import ApiController from "../controllers/apiController";
import iController from "../interfaces/controller.interface"

class SiteRouter {
    constructor(app: any) {
        const getMethod = app.get.bind(app);
        const postMethod = app.post.bind(app);
        this.setRoute(getMethod, '/', new HomeController());
        this.setRoute(getMethod, '/about', new AboutController());
        this.setRoute(getMethod, '/api/user/get', new ApiController());
    }

    setRoute(method: any, path: any, controller: iController, controllerName?:string) {
        if(!controllerName){
            method(path, controller.loadView.bind(controller));
        } else{
            method(path, (<any>controller)[controllerName].bind(controller));
        }
    }
}

export default SiteRouter;