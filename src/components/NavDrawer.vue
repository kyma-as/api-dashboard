<template>
  <div>
    <v-navigation-drawer
        app
        permanent
        clipped
        mobile-break-point="991"
        width="200"
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <span class="primary--text">Dashboard</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider class="primary lighten-1"/>
      <v-list dense class="pt-0" v-for="item in items">
        <v-list-tile class="primary--text" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon class="primary--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
    export default {
        name: "navdrawer",

        data() {
            return {
                items: [
                    {title: 'Home', icon: 'dashboard'},
                    {title: 'Vessels', icon: 'directions_boat'},
                    {title: 'About', icon: 'question_answer'}
                ],
                right: null
            }
        }

    };

</script>
