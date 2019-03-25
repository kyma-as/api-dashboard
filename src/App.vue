<template>
  <v-app>
    <Navbar/>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import Navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
