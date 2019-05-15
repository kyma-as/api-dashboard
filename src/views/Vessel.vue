<template>
  <div class="vessel">
    <NavDrawer/>
    <v-content>
        <span>Welcome to ship {{vessel.name}}.
         </span>
    <div>
        <lineChart/>
    </div>
    <div>
        <pieChart/>
    </div>
    <div>
        <barChart/>
    </div>
    <div>
        <barChartEmission/>
    </div>
     <div>
        <barChartDistance/>
    </div>
    </v-content>
  </div>
</template>

<script>
    import NavDrawer from "@/components/NavDrawer"
    import lineChart from "@/components/Graphs/LineChart.js";
    import pieChart from "@/components/Graphs/PieChart.js";
    import barChart from "@/components/Graphs/BarChart.js";
    import barChartEmission from "@/components/Graphs/BarChartEmission.js";
    import barChartDistance from "@/components/Graphs/BarChartDistance.js";
    import {mapState, mapGetters} from 'vuex';



export default {
    name: "vessel",
    components: {
        NavDrawer,
        lineChart,
        barChart,
        pieChart,
        barChartEmission,
        barChartDistance
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
      ...mapGetters([
        'getSpeed',
        'getFuel',
        'getEmission'
      ]),
      logvariables() {
        return this.vessel.logVariables;
      },
      speed() {
        return this.getSpeed(this.$route.params.vesselid);
      },
      fuel() {
        return this.getFuel(this.$route.params.vesselid);
      },
      emission() {
        return this.getEmission(this.$route.params.vesselid);
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


