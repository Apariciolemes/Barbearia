import Vue from 'vue'
import Router from 'vue-router'
import BarberArea from '@/components/Barber/BarberArea.vue'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/barberArea',
        component: BarberArea
    },
    ]
})