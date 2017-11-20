import * as pkg from '../../../package.json';

class BaseModel {
    pageType: string;
    pageTitle: string;
    version: string;
    constructor(pageType: string) {
        this.pageType = pageType;
        this.version = (<any>pkg).version;
    }
}

export default BaseModel;