import iController from '../interfaces/controller.interface';
import BaseModel from '../models/base/BaseModel';
import CommonFunctions from '../common/CommonFunctions'
import * as express from "express";

class BaseController implements iController {
    req: express.Request;
    res: express.Response;
    next: express.NextFunction;

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        throw new Error("loadView is NOT implemented");
    }

    initialize(req: express.Request, res: express.Response, next?: express.NextFunction): BaseOptions {
        this.req = req;
        this.res = res;
        this.next = next;
        const browser = CommonFunctions.getBrowserInfo(req);
        return {
            browser: browser
        }
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

    renderPage(url: string, model: BaseModel) {
        if (this.res.headersSent) {
            return;
        }
        this.res.render(url, model, (err, html) => {
            if (err) {
                console.log(err);
                return this.res.sendStatus(500);
            }
            return this.res.send(html);
        });
    }

    sendJson(model: Object) {
        if (this.res.headersSent) {
            return;
        }
        return this.res.json(model);
    }
}

export default BaseController;