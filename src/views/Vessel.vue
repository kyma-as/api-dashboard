<template>
<div class="vessel">
    <NavDrawer />
    <v-content>
        <span>Welcome to your Vessel!</span> 
    </v-content>
</div>
</template>

<script>
import NavDrawer from "@/components/NavDrawer"
export default {
    name: "vessel",
    components: {
        NavDrawer
    }
    
}
</script>