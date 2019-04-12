import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:{
      apiKey:"ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="
    },
    allVessels:[], //Vessel Object
    currentVessel:{}, //Current Vessel
  },
  mutations: {
    setAllVessels(state){
      let url = "https://demo.kyma.no/api/v1/vessels";

      let allVessels = [];

      fetch(url, {
        headers: {
          Authorization: "Basic " + state.userInfo.apiKey
        }
      })
          .then(res => res.json())
          .then(json => {
            for (let entry of json) {
              allVessels.push(entry);
            }
            state.allVessels = allVessels;
          });
    },
    setCurrentVessel(state,vesselId){
      state.currentVessel = vesselId;
    }
  },
  actions: {}
});
