import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import PaymentForm from "../components/addPaymenForm.vue";
Vue.use(VueRouter)

const routes = [  
  /*{ghghghg
    path: '/dashboard/:page',
    name: 'Dashboard',
    component: Dashboard
  },  */      //список обьектов с обзательными полями
  {
    path: '/dashboard*',
    name: 'Dashboard',
    //redirect: { path: '/dashboard/?showKey=true' },
    component: Dashboard
  },         //список обьектов с обзательными полями
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about*',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  */  '../views/About.vue')
  },
  {
    path: '/PaymentForm/:category/',
    name: 'PaymentForm',
    component: PaymentForm
  },
  {
    path: '/PaymentForm',
    name: 'PaymentForm',
    component: PaymentForm
  },
  
  {
    path: '/notfound',
    //name: 'NotFound',
    component: NotFound
  },
  /*{
    path: '*',
    name: 'NotFound',
    //component: NotFound
    redirect: '/notfound',
  },*/
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
