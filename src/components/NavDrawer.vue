<template>
    <v-navigation-drawer
    app
    permanent
    clipped
    :mini-variant.sync="mini"
    hide-overlay
    width="180"

  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-action v-if="mini">
            <v-btn
                icon
                @click.stop="mini = !mini"
            >
            <v-icon class="primary--text">menu</v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title style="font-size: larger" class="primary--text">
              <span class="font-weight-bold">Menu</span>
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon class="primary--text">chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider class="primary darken-1"/>
      <v-list class="pt-0" dense v-for="item in items">
      <router-link :to="item.path">
      
      <v-list-tile
      class="primary--text"
      :key="item.title"
      @click=""
      >
      
      <v-list-tile-action>
          <v-icon class="primary--text">{{ item.icon }}</v-icon>
        </v-list-tile-action>

      
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
        
      </v-list-tile>
      </router-link>
        <v-divider class="primary lighten-1"/>
  
      </v-list>
      
      
  </v-navigation-drawer>
</template>

<script>
 import FromDate from "@/components/FromDate";
 import ToDate from "@/components/ToDate";
    export default {
        name: "navdrawer",
            components: {

        FromDate,
        ToDate        
    },
    //computed: {
    //fDate(){
    //  return this.$store.state.fromDate.substring(0,10);
    //},
    //tDate(){
    //  return this.$store.state.toDate.substring(0,10);
    //}
    //},
    
        data() {
            return {
                items: [
                    {title: 'Vessels', icon: 'directions_boat',path:"/vessels"},
                    {title: 'Fuel Report',icon:'assignment',path:"/fuelreport"},
                    {title: 'Print CSV Log',icon:'description',path:"/csv"},
                    {title: 'Logout', icon: 'exit_to_app',path:"/"}
                ],
                mini: false,
                right: null
            }
        }
    };
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>