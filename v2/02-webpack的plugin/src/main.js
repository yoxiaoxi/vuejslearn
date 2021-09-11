import {name} from './js/aaa.js'

console.log(name);


require('./css/normal.css')
require('./css/special.less')

// 使用vue开发
import Vue from 'vue'

// const app = new Vue({
//     el: '#app',
//     template:`
//     <div>
//       <h2>{{msg}}</h2>
//       <button @click="btnmain">点击按钮</button>
//     </div>
//     `,
//     data: {
//         msg: 'hello world'
//     },
//     methods:{
//         btnmain(){
//             console.log('点击');
//         }
//     }
// })
import App from './vue/App.vue'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})