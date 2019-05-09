<template>
  <v-app>
    <Navbar/>
    
    <router-view class="ma-2">
    </router-view>

  </v-app>
</template>

<script>
import Navbar from './components/NavBar'

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
