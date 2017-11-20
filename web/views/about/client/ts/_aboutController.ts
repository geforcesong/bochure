import Vue from 'vue';
import HelloComponent from './components/Hello.vue';

class AboutController {
    app: Vue;
    constructor() {
        this.app = new Vue({
            el: '#app',
            components: {
                HelloComponent
            },
            data: {
                message: 'Hello Vue!' + new Date().toLocaleString(),
                seen: true
            }
        })
    }
}

var a = new AboutController();

export default AboutController;