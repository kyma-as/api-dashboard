<template>
  <div class="text-xs-left">
    <v-menu open-on-hover offset-y>

      <template v-slot:activator="{ on }">
        <v-btn
            color="primary"
            dark
            v-on="on"
        >
          Graphs
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
            v-for="(item, index) in graphs"
            :key="index"
            @click="showGraph(item.title)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-menu>

    <speedChart v-if="selected == 'Speed'"/>
    <barChart v-if="selected == 'Fuel Consumption Bar'"/>
    <pieChart v-if="selected == 'Fuel Consumption Pie'"/>
    <fuel-types v-if="selected == 'Fuel Types'"/>
    <barChartEmission v-if="selected == 'Emission'"/>
    <barChartDistance v-if="selected == 'Distance'"/>
  </div>
</template>

<script>

    import speedChart from "@/components/Graphs/SpeedChart.js";
    import pieChart from "@/components/Graphs/TotalFuelPieChart.js";
    import barChart from "@/components/Graphs/TotalFuelBarChart.js";
    import barChartEmission from "@/components/Graphs/BarChartEmission.js";
    import barChartDistance from "@/components/Graphs/BarChartDistance.js";
    import fuelTypes from "@/components/Graphs/TotalFuelTypesBarChart.js";
    import {mapState, mapGetters} from 'vuex';

    export default {
        data: () => ({
            graphs: [
                {title: 'Speed'},
                {title: 'Fuel Consumption Bar'},
                {title: 'Fuel Consumption Pie'},
                {title: 'Fuel Types'},
                {title: 'Emission'},
                {title: 'Distance'},
            ],
            selected: ""
        }),
        components: {
            speedChart,
            barChart,
            pieChart,
            barChartEmission,
            barChartDistance,
            fuelTypes
        },
        methods: {
            showGraph: function (input) {
                this.selected = input
            }
        },
        computed: {
            ...mapState([
                'vessels'
            ]),
           
        },
        mounted() {
            const vessel = this.vessels
                .find(x => x.id === this.$route.params.vesselid);
            this.vessel = vessel;
            this.selected = 'Speed';
        },
    }
</script>

