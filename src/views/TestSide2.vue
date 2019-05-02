
<template>
  <div class="testside2">
    <NavDrawer />
    <v-content>
       <div class="container">
    <PieExample/>
  </div>
         <div class="container">
    <BarExample/>
  </div>
  <div class="container">
    <LineExample/>
  </div>
    </v-content>
  </div>
</template>
<script>
import NavDrawer from "@/components/NavDrawer";
import LineExample from "@/components/LineChart.js";
import PieExample from "@/components/PieChart.js";
import BarExample from "@/components/BarChart.js";

    export default {
        name: "testside2",
        components: {
          PieExample,
          NavDrawer, 
          LineExample,
          BarExample
        }, 
}
</script>