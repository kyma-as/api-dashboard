<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<v-container grid-list-md>
  <v-layout row wrap>
    <v-flex>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
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
            label="Date from"
            hint="YYYY/MM/DD"
            persistent-hint
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
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date), sendDate(dateFormatted)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
 export default {
    data: vm => ({
      date: new Date().toJSON().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toJSON().substr(0, 19)),
      menu: false
    }),
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },
    methods: {
      formatDate (date) {
        if(!date) return null
        const [year, month, day] = date.split('-')
        return `${year}-${month}-${day}T00:00:00`
      },
      sendDate(dateFormatted) {
        this.$emit('get-from-date', dateFormatted)
      }
    }
  }
</script>
