import BaseController from "../controllers/baseController";
import * as express from "express";
import AdminModel from '../models/admin/AdminModel';

class AdminController extends BaseController {
    constructor(){
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        const options = this.initialize(req, res, next);
        const adminModel: AdminModel = new AdminModel();
        this.renderPage('admin/admin.pug', adminModel);
    }
}

export default AdminController;