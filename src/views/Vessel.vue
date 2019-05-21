<template>
  <div class="vessel">
    <NavDrawer/>
    <v-content>
      <span>Welcome to ship {{vessel.name}}.</span>
    <GraphCard />
 
    </v-content>
  </div>
</template>

<script>
    import GraphCard from "@/components/GraphCard";
    import NavDrawer from "@/components/NavDrawer";
   
    import {mapState, mapGetters} from 'vuex';



export default {
    name: "vessel",
    components: {
        GraphCard,
        NavDrawer
        
        
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
    }/*,
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


