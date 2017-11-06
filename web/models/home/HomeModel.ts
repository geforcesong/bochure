import BaseModel from '../base/BaseModel';

class HomeModel extends BaseModel {
    constructor() {
        super('HomePage');
        this.pageTitle = 'Home Page';
    }
}

export default HomeModel;