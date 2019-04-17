<template>
<div class="vessel">
    <NavDrawer />
    <v-content>
        <span>Welcome to {{currentVessel.name}}</span>
    </v-content>
</div>
</template>

<script>
import NavDrawer from "@/components/NavDrawer"
export default {
    name: "vessel",
    components: {
        NavDrawer,
    },
    data(){
      return {
          currentVessel:""
      }
    },
    mounted(){
        this.currentVessel = this.$store.state.currentVessel;
    },
    computed:{

    }
    
}
</script>