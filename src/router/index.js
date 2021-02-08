import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import ShowCenter from "../components/ShowCenter";
import Login from "../components/Login";
import Base from "../components/Base";
import Host from "../components/Host";
import Base1 from "../components/Base";


export default new Router({
  mode: "history",
  routes: [
    {
      path: '/ShowCenter',
      name: 'ShowCenter',
      component: ShowCenter
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hippo',
      name: 'hippo',
      component: Base,
      children:[
        {
          path: "Host",
          component:Host,
          name: "Host"
        },
        {
          path:"ShowCenter",
          component:ShowCenter,
          name:ShowCenter
        }
      ]
    }
  ]
})
