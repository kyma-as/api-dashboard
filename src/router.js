import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import ApiOutput from "./views/ApiOutput.vue";
import TestSide from "./views/TestSide.vue"
import TestSide2 from "./views/TestSide2.vue"
import Vessel from "./views/Vessel.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/apioutput",
      name: "apiOutput",
      component: ApiOutput
    },
    {
      path: "/vessel",
      name: "vessel",
      component: Vessel
    },
    {
      path: "/testside",
      name: "testside",
      component: TestSide
    },
    {
      path: "/testside2",
      name: "testside2",
      component: TestSide2
    }
  ]
});
