import * as $ from "jquery";

class HomeController {
    constructor() {
        $('#btnSave').click(()=>{
            this.bing();
        })
    }

    bing() {
        alert('bing');
    }
}

export default HomeController;