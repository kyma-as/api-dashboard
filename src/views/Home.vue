<template>
  <div class="home">
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
      </v-list>
    </v-content>
  </div>
</template>


<script>

    export default {
        name: "home"
    }
</script>