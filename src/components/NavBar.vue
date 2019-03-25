<template>
  <nav>
    <v-toolbar height="60" flat app class="secondary lighten-1">
      <AppTitle/>
    </v-toolbar>
  </nav>
</template>

<script>
    import AppTitle from "@/components/AppTitle"

    export default {
        name: "NavBar",
        components: {AppTitle}
    }
</script>

<style scoped>

</style>