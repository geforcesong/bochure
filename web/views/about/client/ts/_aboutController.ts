import Vue from 'vue';
import HelloComponent from './components/Hello.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import CurrencyInput from './components/CurrencyInput.vue';
import ListControl from './components/ListControl.vue';
import ListSelection from './components/ListSelection.vue';

class AboutController {
    app: Vue;
    constructor() {
        this.app = new Vue({
            el: '#app',
            components: {
                'hello-component': HelloComponent,
                'buttoncounter': ButtonCounter,
                'currencyinput': CurrencyInput,
                'listcontrol': ListControl,
                'listselection':ListSelection
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