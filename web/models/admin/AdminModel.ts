import BaseModel from '../base/BaseModel';

class AdminModel extends BaseModel {
    constructor() {
        super('AdminPage');
        this.pageTitle = 'Admin';
    }
}

export default AdminModel;