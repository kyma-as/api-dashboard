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
      component: Vessel
    }
  ]
});