import * as _ from 'lodash';
import Vue from 'vue';
import * as mycomp from './components/mycomponent.vue';

class AboutController {
    app: Vue;
    constructor() {
        Vue.component('todo-item', {
            // todo-item 组件现在接受一个
            // "prop"，类似于一个自定义属性
            // 这个属性名为 todo。
            props: ['todo'],
            template: '<li>{{ todo.id + 1 }}-{{ todo.text }}<button v-on:click="$emit(\'remove\')">X</button></li>'
        })
        this.app = new Vue({
            el: '#app',
            components: {
                'my-component': mycomp
            },
            data: {
                message: 'Hello Vue!' + new Date().toLocaleString(),
                seen: true,
                groceryList: [
                    { id: 0, text: 'Car' },
                    { id: 1, text: 'Plane' },
                    { id: 2, text: 'Tank' }
                ],
                classObj: {
                    active: true,
                    noerror: true,
                    err: false,
                    er: true
                },
                loginType: 'username'
            },
            computed: {
                reversedMessage: function () {
                    return this.message.split('').reverse().join('');
                }
            },
            methods: {
                reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('');
                    let itm = {
                        id: this.groceryList.length,
                        text: `item${this.groceryList.length}`
                    }
                    this.groceryList.push(itm);
                }
            },
            created: function () {
                console.log('create app');
            }
        })
    }
}

export default AboutController;