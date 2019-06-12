<template>
  <div class="vessel">
    <NavDrawer/>
    <v-content>
      <span style="font-size:x-large" class="font-weight-bold">{{vessel.name}}</span>
      <v-divider class="primary"></v-divider>
    <v-layout column>
      <v-layout row>
      <FromDate />
      <ToDate />
      </v-layout>
      <GraphCard />
    </v-layout>
    </v-content>
  </div>
</template>

<script>
    import GraphCard from "@/components/GraphCard";
    import NavDrawer from "@/components/NavDrawer";
    import FromDate from "@/components/FromDate";
    import ToDate from "@/components/ToDate";
    import {mapState, mapGetters} from 'vuex';
export default {
    name: "vessel",
    components: {
        GraphCard,
        NavDrawer,
        FromDate,
        ToDate       
    },
    data(){
      return {
        vessel: {}
      }
    },
    computed: {
      ...mapState([
        'vessels'
      ]),
      logvariables() {
        return this.vessel.logVariables;
      } 
    },
    mounted() {
      const vessel = this.vessels
      .find(x => x.id === this.$route.params.vesselid);
      this.vessel = vessel;
    }
    /*,
    watch: {
    '$route.params': {
        function (newValue) {
            const { newVesselId } = newValue;
            const vessel = this.vessels
            .find(x => x.id === newVesselId);
            this.vessel = vessel;
        },
        immediate: true,
    }
}*/
    }
</script>


