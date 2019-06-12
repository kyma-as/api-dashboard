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
    <barChart v-if="selected == 'Total Fuel BarChart'"/>
    <fuelUsersBarChart v-if="selected == 'Bar-Chart FuelUsers'"/>
    <barChartFuelType v-if="selected == 'Bar-Chart FuelType'"/>
    <BarChartFuelTypes v-if="selected == 'Total FuelTypes BarChart'"/>
    <pieChart v-if="selected == 'Pie-Chart'"/>
    <barChartEmission v-if="selected == 'Bar-Chart Emission'"/>
    <barChartDistance v-if="selected == 'Bar-Chart Distance'"/>
  </div>
</template>

<script>

    import speedChart from "@/components/Graphs/SpeedChart.js";
    import pieChart from "@/components/Graphs/TotalFuelPieChart.js";
    import barChart from "@/components/Graphs/TotalFuelBarChart.js";
    import fuelUsersBarChart from "@/components/Graphs/FuelUsersBarChart.js";
    import BarChartFuelType from "@/components/Graphs/FuelTypesBarChart.js";
    import BarChartFuelTypes from "@/components/Graphs/TotalFuelTypesBarChart.js";
    import barChartEmission from "@/components/Graphs/BarChartEmission.js";
    import barChartDistance from "@/components/Graphs/BarChartDistance.js";
    import {mapState, mapGetters} from 'vuex';

    export default {
        data: () => ({
            graphs: [
                {title: 'Speed'},
                {title: 'Total Fuel BarChart'},
                {title: 'Total FuelTypes BarChart'},
                {title: 'Pie-Chart'},
                {title: 'Bar-Chart Emission'},
                {title: 'Bar-Chart Distance'},
                {title: 'Bar-Chart FuelUsers'},
                {title: 'Bar-Chart FuelType'},
            ],
            selected: ""
        }),
        components: {
            speedChart,
            barChart,
            fuelUsersBarChart,
            pieChart,
            barChartEmission,
            barChartDistance,
            BarChartFuelType,
            BarChartFuelTypes
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

