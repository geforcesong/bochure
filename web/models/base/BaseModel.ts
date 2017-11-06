class BaseModel {
    pageType: string;
    pageTitle: string;
    constructor(pageType: string) {
        this.pageType = pageType;
    }
}

export default BaseModel;