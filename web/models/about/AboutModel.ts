import BaseModel from '../base/BaseModel';

class AboutModel extends BaseModel {
    constructor() {
        super('AboutPage');
        this.pageTitle = 'About Us';
    }
}

export default AboutModel;