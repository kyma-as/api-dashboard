<template>
  <div class>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-overflow
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
          <v-btn color="primary" flat @click="menu = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import FromDate from "@/components/FromDate";
import ToDate from "@/components/ToDate";
export default{
    data: () => ({
      menu: false
    }),
    components: {
      FromDate,
      ToDate
    }
  
  }

</script>
