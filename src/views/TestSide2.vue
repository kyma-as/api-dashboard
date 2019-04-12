
<template>
  <div class="testside2">
    <NavDrawer />
    <v-content>
       <div class="container">
    <line-example/>
  </div>
    </v-content>
  </div>
</template>
<script>
import NavDrawer from "@/components/NavDrawer";
import LineExample from "@/components/LineChart.js";
import {getApiDataTest} from "../scripts/getData"; 
    export default {
        name: "testside2",
        components: {
          NavDrawer, 
          LineExample
        }, 
}
</script>
<style>
.container {
  max-width: 800px;
  margin:  0 auto;
}
</style>