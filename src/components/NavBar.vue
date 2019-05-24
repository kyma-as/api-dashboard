<template>
  <nav>
    <v-toolbar clipped-left height="60" flat app class="secondary">
      <router-link v-if="loggedIn" to="/vessels">
        <AppTitle/>
      </router-link>
      <AppTitle v-if="!loggedIn"/>
    </v-toolbar>
  </nav>
</template>

<script>
    import AppTitle from "@/components/AppTitle"
    import {mapState} from "vuex";

    export default {
        name: "NavBar",
        data() {
            return {}
        },
        components: {AppTitle},
        computed: {
            ...mapState([
                'loggedIn'
            ])
        }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
