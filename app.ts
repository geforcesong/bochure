import * as express from "express";
import * as path from "path";
import SiteRouter from "./web/configuration/routes";

class Server {
    app: any;
    constructor() {
        this.app = express();
        new SiteRouter(this.app);
        this.app.set('views', path.join(__dirname, '..', 'web', 'views'));
        this.app.set('view engine', 'pug');
    }

    run() {
        this.app.listen(3000, function () {
            console.log('Typtscript Example app listening on port 3000!')
        })
    }
}

var server = new Server();
server.run();