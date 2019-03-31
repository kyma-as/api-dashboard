<template>
  <div class="home">
    <NavDrawer />
    <v-content>
      <v-list>
        <v-list-tile>
          <router-link to="/">
            <span>Logout</span>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <router-link to="/apioutput">
            <span>API-output</span>
          </router-link>
        </v-list-tile>
          <router-link to="/testside">
            <span>Test</span>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-content>
  </div>
</template>


<script>
import NavDrawer from "@/components/NavDrawer"
    export default {
        name: "home",
        components: {
          NavDrawer
        }
    }
</script>