import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/index.vue'


const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Index }       
    ]
});

export default router
