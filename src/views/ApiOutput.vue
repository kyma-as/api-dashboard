<template>
  <div>
    <NavDrawer/>
    <v-content>
      <v-layout row wrap>
        <v-flex>
          <v-text-field class="white"
                        label="Url Parameter"
                        v-model="urlParam"
          ></v-text-field>
          <v-btn @click="getApiData">Fetch Data</v-btn>
          <v-btn @click="getApiDataVessel">Vessels</v-btn>
          <v-btn @click="clearData">Clear Data</v-btn>
          <v-btn @click="getApiDataTest">Testing Ahem Testing</v-btn>
          <v-progress-circular
              v-if="loading"
              :indeterminate="loading"
              color="primary"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-list v-for="row in rows" class="primary">
        <v-divider/>
        <v-list-tile class="tertiary">
          {{row}}
        </v-list-tile>
        <v-divider/>
      </v-list>
    </v-content>
  </div>
</template>

<script>
    import {getApiData,getApiDataVessel,getApiDataTest} from "../scripts/getData";
    import NavDrawer from "@/components/NavDrawer"
    export default {
        name: "ApiOutput",
        components:{
          NavDrawer
        },
        data() {
            return {
                loading: false,
                urlParam: "vessels",
                rows: []
            }
        },
        methods: {
            getApiData(){
                this.loading = true;
                console.log("Trying to fetch data...");
                getApiData(this.urlParam, this.rows)
                    .finally(()=>{
                        this.loading = false;
                    });
            },
            getApiDataVessel: function () {
                this.loading = true;
                console.log("Trying to fetch data...");
                getApiDataVessel(this.urlParam, this.rows)
                    .finally(()=>{
                        this.loading = false;
                    });
            },
            getApiDataTest: function () {
                this.loading = true;
                console.log("Trying to fetch testdata...");
                getApiDataTest( this.rows)
                    .finally(()=>{
                        this.loading = false;
                    });
            },
            clearData() {
                this.loading = false;
                this.rows = []
            }
        }
    }

</script>

<style scoped>

</style>