import * as _ from 'lodash';
import Vue from 'vue';
import mycomp from './components/mycomponent.vue';

class AboutController {
    app: Vue;
    constructor() {
        this.app = new Vue({
            el: '#app',
            components: {
                'my-component': mycomp
            },
            data: {
                message: 'Hello Vue!' + new Date().toLocaleString(),
                seen: true
            }
        })
    }
}

export default AboutController;