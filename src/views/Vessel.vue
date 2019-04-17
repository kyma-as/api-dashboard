<template>
<div class="vessel">
    <NavDrawer />
    <v-content>
        <span>Welcome to ship {{vessel.name}}.
          {{ vessel.id }} == this.$route.params.vesselid</span>
    </v-content>
</div>
</template>

<script>
import NavDrawer from "@/components/NavDrawer"
import { mapState } from 'vuex';

export default {
    name: "vessel",
    components: {
        NavDrawer,
    },
    data(){
      return {
        vessel: {}
      }
    },
    computed: {
      ...mapState([
        'vessels'
      ])
    },
    mounted() {
      const vessel = this[this.vessels]
      .find(x => x.id === this.$route.params.vesselid);
      this.vessel = vessel;
    }

}
</script>
