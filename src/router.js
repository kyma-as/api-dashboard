import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Vessels from "./views/Vessels.vue";
import Vessel from "./views/Vessel.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/vessels",
      name: "vessels",
      component: Vessels
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/vessels/:vesselid",
      name: "vessel",
      //component: () => import('@/components/Post'), the component won't get
      // loaded on the page until the route is actually visited
      component: Vessel
    }
  ]
});
