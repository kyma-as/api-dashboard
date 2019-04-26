<template>
  <v-app>
    <Navbar/>
    <keep-alive>
    <router-view>
    </router-view>
  </keep-alive>
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
