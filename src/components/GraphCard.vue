<template>
  <div class="text-xs-left">
    <v-menu open-on-hover offset-y>

      <template v-slot:activator="{ on }">
        <v-btn
            color="primary"
            dark
            v-on="on"
        >
          Graph
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

    <lineChart v-if="selected == 'Line-Chart'"/>
    <barChart v-if="selected == 'Bar-Chart'"/>
    <barChartAar v-if="selected == 'Bar-Chart Aar'"/>
    <barChartFuelType v-if="selected == 'Bar-Chart FuelType'"/>
    <pieChart v-if="selected == 'Pie-Chart'"/>
    <barChartEmission v-if="selected == 'Bar-Chart Emission'"/>
    <barChartDistance v-if="selected == 'Bar-Chart Distance'"/>
  </div>
</template>

<script>

    import lineChart from "@/components/Graphs/LineChart.js";
    import pieChart from "@/components/Graphs/PieChart.js";
    import barChart from "@/components/Graphs/BarChart.js";
    import barChartAar from "@/components/Graphs/BarChartAar.js";
    import BarChartFuelType from "@/components/Graphs/BarChartFuelType.js";
    import barChartEmission from "@/components/Graphs/BarChartEmission.js";
    import barChartDistance from "@/components/Graphs/BarChartDistance.js";
    import {mapState, mapGetters} from 'vuex';

    export default {
        data: () => ({
            graphs: [
                {title: 'Line-Chart'},
                {title: 'Bar-Chart'},
                {title: 'Pie-Chart'},
                {title: 'Bar-Chart Emission'},
                {title: 'Bar-Chart Distance'},
                {title: 'Bar-Chart Aar'},
                {title: 'Bar-Chart FuelType'},
            ],
            selected: ""
        }),
        components: {
            lineChart,
            barChart,
            barChartAar,
            pieChart,
            barChartEmission,
            barChartDistance,
            BarChartFuelType
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
            this.selected = 'Line-Chart';
        },
    }
</script>

