<template>
  <div class="testside">
    <NavDrawer />
    <v-content>
      <v-list>
        <v-list-tile>
          <v-btn @click="getApiDataTest">Testing Ahem Testing</v-btn>
        </v-list-tile>
      </v-list>
        <svg width="1200" height="1200">
            <g v-for="(value, i) in rows"
            :transform="'translate(60, 600) rotate(270)'">
             <rect height="20" v-bind:width="25 * value" v-bind:y="i*30+20" fill="green" 
             ></rect>
             <text v-bind:y="i*30 + 35" fill="White">{{value}}</text>
            </g>
        </svg>
    </v-content>
  </div>
</template>
<script>
import NavDrawer from "@/components/NavDrawer";
import {getApiDataTest} from "../scripts/getData";   
    export default {
        name: "testside",
        data() {
            return {
                loading: false,
                urlParam: "vessels",
                rows: [],
            }
        },
        components: {
          NavDrawer, 
        },
        methods: {
            getApiDataTest: function () {
                console.log("Trying to fetch testdata...");
                getApiDataTest( this.rows)
                
            },
        }
    }
</script>