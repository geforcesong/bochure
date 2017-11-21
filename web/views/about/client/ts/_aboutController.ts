import Vue from 'vue';
import HelloComponent from './components/Hello.vue';
import ButtonCounter from './components/ButtonCounter.vue';

class AboutController {
    app: Vue;
    constructor() {
        this.app = new Vue({
            el: '#app',
            components: {
                'hello-component': HelloComponent,
                'buttoncounter': ButtonCounter
            },
            data: {
                message: 'Hello Vue!' + new Date().toLocaleString(),
                seen: true,
                total: 0
            },
            methods: {
                incrementTotal: function () {
                    this.total += 1
                }
            }
        })
    }
}

var a = new AboutController();

export default AboutController;