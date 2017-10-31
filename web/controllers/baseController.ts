import iController from '../interfaces/controller.interface';
import * as express from "express";

class BaseController implements iController {
    req: express.Request;
    res: express.Response;
    next: express.NextFunction;
    
    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        throw new Error("Not implemented");
    }

    initialize(req: express.Request, res: express.Response, next?: express.NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    redirect301(url: string) {
        if (!this.res.headersSent) {
            this.res.writeHead(301, {
                Location: url
            });
            this.res.end();
        }
    }

    redirect302(url: string) {
        if (!this.res.headersSent) {
            this.res.writeHead(302, {
                Location: url
            });
            this.res.end();
        }
    }
}

export default BaseController;