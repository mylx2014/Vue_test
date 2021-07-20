// 引入Vue
import Vue from "vue";
// 引入App
import App from "./APP";

// 关闭Vue的生产提示
Vue.config.productionTip = false



new Vue({
    el: '#app',
    render: h => h(App),
})