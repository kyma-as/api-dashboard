<template>
    <v-navigation-drawer
    app
    permanent
    clipped
    :mini-variant.sync="mini"
    hide-overlay
    width="210"
    
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>menu</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider class="primary lighten-1"/>
      <v-list class="pt-0" dense v-for="item in items">
      <router-link :to="item.path">
      
      <v-list-tile
      class="primary--text"
      :key="item.title"
      @click=""
      >
      
      <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
        
      </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        name: "navdrawer",
        data() {
            return {
                items: [
                    {title: 'Vessels', icon: 'directions_boat',path:"/vessels"},
                    {title: 'Logout', icon: 'exit_to_app',path:"/"}
                ],
                mini: true,
                right: null
            }
        }
    };
</script>