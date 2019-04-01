<template>
  <div class="home">
    <NavDrawer />
    <v-content>
      <v-list>
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