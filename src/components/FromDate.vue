<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<v-container fluid class="pa-0 ma-0">
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
            label="From"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>

        <v-date-picker
        v-model="date"
        no-title
        scrollable
        min="2016-01-01"
        :max="dateTo"
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date), sendDateToState(fromDateFormatted)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
 export default {
    data: function() {
      return {
        date: this.dateFrom,
        fromDateFormatted: this.formatDate(new Date().toJSON().substr(0, 19)),
        menu: false
      }
    },
    watch: {
      date (val) {
        this.fromDateFormatted = this.formatDate(this.date)
      }
    },
   computed: {
     dateYesterday() {
       return this.$store.state.dateYesterday;
     },
     ...mapGetters([
       'dateFrom',
       'dateTo'
     ])
   },
    methods: {
      formatDate (date) {
        if(!date) return null
        const [year, month, day] = date.split('-')
        return `${year}-${month}-${day}T00:00:00`
      },
      sendDateToState() {
        let fdate = {from:this.fromDateFormatted};
        this.$store.dispatch('setDates', fdate);
      },
      fDate() {
        return this.$store.state.fromDate;
      }
    },
    mounted() {
      this.date = this.dateFrom;
    }
  }
</script>
