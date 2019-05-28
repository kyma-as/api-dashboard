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
        <FromDate />
        <ToDate />
      
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          
          <v-btn 
          color="primary" 
          flat 
          @click="menu = false, 
          sendDateToState()"
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
import { EventBus } from '@/event-bus.js';
import { mapActions } from 'vuex';

export default{
    components: {
      FromDate,
      ToDate
    },
    created(){
      EventBus.$on("get-from-date", (fromDateFormatted) => {
        this.fromDateFormatted = fromDateFormatted;
      });
      EventBus.$on("get-to-date", (toDateFormatted) => {
        this.toDateFormatted = toDateFormatted;
      });
    },
    data() {
      return {
        fromDateFormatted: Date(),
        toDateFormatted: Date(),
        menu: false
      }
    },
    methods: {
        sendDateToState(){
            let dates = {from:this.fromDateFormatted,to:this.toDateFormatted};
            this.$store.dispatch('setDates',dates);
      }
    }
  }
</script>
