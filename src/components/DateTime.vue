<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class>
    <v-menu
      v-model="menu" 
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Date
        </v-btn>
      </template>

      <v-card>
        <FromDate :fdate="this.fdate" @get-from-date="getFromDate"/>
        <ToDate :tdate="this.tdate" @get-to-date="getToDate"/>
      
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          
          <v-btn 
          color="primary" 
          flat 
          @click="menu = false, 
          getFromDate(fdate),
          getToDate(tdate)"
          >
          Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import FromDate from "@/components/FromDate";
import ToDate from "@/components/ToDate";

export default{
    components: {
      FromDate,
      ToDate
    },
    data() {
      return {
        fdate: Date(),
        tdate: Date(),
        menu: false
      }
    },
    methods: {
      getFromDate(f){
        this.fdate = f
        console.log(f)
      },
      getToDate(t){
        this.tdate = t
        console.log(t)
      }
    }
  }
</script>
