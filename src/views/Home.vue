<template>
  <div class="home">
    <NavDrawer />
    <v-content>
      <v-btn @click=" getApiDataTest" >get info</v-btn>
      <v-btn @click="calculatePath" >Tegn</v-btn> 
    </v-content> 
    <v-content>                       
  <svg width="700" height="500" style="background: white" :transform="'translate(20, 0)'">
    <g >
      <path :d="line" stroke="blue" fill="none" />
      <path :d="yaksen" stroke="black" fill="none" :transform="'translate(-520, 0)'"/>
      <path :d="xaksen" stroke="green" fill="none" :transform="'translate(-100, 0)'"/>
    </g>
  </svg>
    </v-content>
  </div>
</template>
<script>
import NavDrawer from "@/components/NavDrawer";
import * as d3 from 'd3';
import {getApiDataTest} from "../scripts/getData";  
    export default {
        name: "home",
        components: {
          NavDrawer
        },

      data() {
      return {
      rows: [],
      xaksedata: [-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],
      yaksedata: [100000,0],
      line: '',
      yaksen: '',
      xaksen: '',
      
    };
  },
  mounted() {


  },
     methods:{
    getScales() {
      const x = d3.scaleTime().range([550, 40]);
      const y = d3.scaleLinear().range([350, 20]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.rows, (d, i) => i));
      y.domain([0, d3.max(this.rows, d => d)]);
      return { x, y,};
    },
    calculatePath() {
      const scale = this.getScales();

      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));

      const yakse = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));

      const xakse = d3.line()
        .x((d, i) => scale.x(i))
        .y((d) => scale.y(d));

      this.xaksen = xakse(this.xaksedata)
      this.yaksen = yakse(this.yaksedata)
      this.line = path(this.rows);
    },
     getApiDataTest: async function () {
                this.rows = []
                console.log("Trying to fetch testdata...");
                await getApiDataTest(this.rows)
                this.rows.reverse();                
      },
  }
};

</script>
