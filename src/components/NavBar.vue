<template>
  <nav>
    <v-toolbar height="60" flat app class="secondary">
      <router-link to="/home">
        <AppTitle/>
      </router-link>
    </v-toolbar>
  </nav>
</template>

<script>
    import AppTitle from "@/components/AppTitle"

    export default {
        name: "NavBar",
        data(){
            return {
            }
        },
        components: {AppTitle}
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>