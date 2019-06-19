<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <nav-drawer/>
    <div>
      <v-content>
        <v-layout row wrap>
          <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select
                  class
                  v-model="selectedVessels"
                  :items="vessels"
                  label="Select Vessel"
                  single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select
                  class
                  v-model="selectedTimeFrame"
                  :items="timeFrame"
                  label="Select Timeframe"
                  single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select
                  class
                  v-model="selectedData"
                  :items="data"
                  label="Select Data"
                  single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
            <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-btn
                  class="primary primary darken-3"
                  flat
                  large
                  @click="toggleClick"
                >Show Graph</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1">
              <v-card-actions class="v-btn--large">
                <v-select
                  class
                  v-model="selectedYear"
                  :items="year"
                  label="Select Year"
                  single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
        
          <v-flex sm6 md6 lg4>
            <v-card dark tile flat class="primary darken-1"  >
              <v-card-actions class="v-btn--large">
                <v-select v-if="selectedTimeFrame == 'Days'"
                  class
                  v-model="selectedMonth"
                  :items="month" 
                  label="Select Month"
                  single-line
                ></v-select>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <fuelUsers v-bind:selectedVessels="selectedVessels"  v-bind:selectedMonth="selectedMonth"  v-bind:selectedYear="selectedYear"  v-bind:selectedTimeFrame="selectedTimeFrame" v-if="selectedData == 'Fuel Users' && toggleShow"/>
        <fuelTypes v-bind:selectedVessels="selectedVessels"  v-bind:selectedMonth="selectedMonth"  v-bind:selectedYear="selectedYear"  v-bind:selectedTimeFrame="selectedTimeFrame" v-if="selectedData == 'Fuel Types' && toggleShow"/>
      </v-content>
    </div>
  </div>
  
</template>
<script>
import NavDrawer from "@/components/NavDrawer";
import FromDate from "@/components/FromDate";
import ToDate from "@/components/ToDate";
import fuelUsers from "@/components/Graphs/FuelUserRep.js";
import fuelTypes from "@/components/Graphs/FuelTypeRep.js";
import {mapState, mapGetters} from 'vuex';

export default {
  components: {
    NavDrawer,
    FromDate,
    ToDate,
    fuelTypes,
    fuelUsers
  },

 
  methods: {
      toggleClick(){
          if(this.toggleShow){
              let _this = this;
              setTimeout(()=>{
                  _this.toggleShow = !this.toggleShow;
              },10)
              _this.toggleShow = !this.toggleShow;
          }else{
              this.toggleShow = !this.toggleShow;
          }
      }
  },
  data() {
    return {
        toggleShow:false,
      vessels: ["110", "121", "123", "133"],
      timeFrame: ["Quarters", "Months", "Days"],
      data: ["Fuel Types", "Fuel Users"],
      year: ["2019","2018", "2017", "2016"],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      // Selections
      selected: [],
      selectedData: [],

      selectedVessels: [],
      selectedTimeFrame: [],
      selectedYear: [],
      selectedMonth: "",
      // Misc
      loading: false
    };
  }
};
</script>
