<template>
  <div class="vessel">
    <NavDrawer/>
    <v-content>
      <span>Welcome to ship {{vessel.name}}.</span>
    <v-layout column>
      <GraphCard />

    </v-layout>
    </v-content>
  </div>
</template>

<script>
    import GraphCard from "@/components/GraphCard";
    import NavDrawer from "@/components/NavDrawer";
    import DateTime from "@/components/DateTime";
    import {mapState, mapGetters} from 'vuex';
export default {
    name: "vessel",
    components: {
        GraphCard,
        NavDrawer,
        DateTime        
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


