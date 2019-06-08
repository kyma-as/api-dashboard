<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="To"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          
          <v-date-picker 
          v-model="date" 
          no-title scrollable
          :min="fDate"
          :max="date"
          >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date), sendDateToState(toDateFormatted)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex> 
    </v-layout>
  </v-container>
</template>


<script>
import { EventBus } from "@/event-bus.js";
import { mapActions } from "vuex";
export default {
    data: vm => ({
        date: new Date().toJSON().substr(0, 10),
        toDateFormatted: vm.formatDate(new Date().toJSON().substr(0, 19)),
        menu: false
    }),
    watch: {
      date (val) {
        this.toDateFormatted = this.formatDate(this.date)
      }
    },
    methods: {
      formatDate (date) {
        if(!date) return null
        const [year, month, day] = date.split('-')
        return `${year}-${month}-${day}T00:00:00`
      },
      sendDateToState() {
        let tdate = {to:this.toDateFormatted};
        this.$store.dispatch('setDates', tdate);
        //EventBus.$emit('get-to-date', toDateFormatted);
      }
    }
}
</script>