import * as setting from '../../../system.config.json';
import * as pkg from '../../../package.json';

class BaseModel {
    pageType: string;
    pageTitle: string;
    server: any;
    version: string;
    constructor(pageType: string) {
        this.pageType = pageType;
        this.server = (<any>setting).server;
        this.server.cdnUrl = process.env.NODE_ENV === 'DEV' ? this.server.devServerUrl : this.server.appUrl;
        this.version = (<any>pkg).version;
    }
}

export default BaseModel;