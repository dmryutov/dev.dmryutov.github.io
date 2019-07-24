import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueScrollTo from 'vue-scrollto';


import App from '@/App.vue';
import router from '@/router/index';


// Plugins
Vue.use(VueRouter);
Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields',
});
Vue.use(VueScrollTo);


// Create app
export const vueApp = new Vue({
    el: '#app',
    router,
    render: (h) => h(App),
});
window.vueApp = vueApp;
