import * as express from "express";

interface iController {
    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void;
}

export default iController;