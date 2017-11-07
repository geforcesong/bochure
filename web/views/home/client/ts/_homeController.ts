import * as _ from 'lodash';

class HomeController {
    cars: Array<number>;

    constructor() {
        this.cars = [1, 2, 3, 4, 5];
        $('#btnSave').click(() => {
            this.bing();
        })
    }

    bing() {
        alert('hello world');
        let d = _.find(this.cars, (d) => {
            return d > 2;
        });
        alert(d);
    }
}

export default HomeController;