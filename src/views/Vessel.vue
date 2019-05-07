<template>
<div class="vessel">
    <NavDrawer />
    <v-content>
        <span>Welcome to ship {{vessel.name}}.
          {{ vessel.id }} == {{ this.$route.params.vesselid }}</span>
            <ul id="example-2">
            <li v-for="i, x in speed.log.data">
              {{ x }}
              {{ i }}
            </li>
          </ul>
    </v-content>
</div>
</template>

<script>
import NavDrawer from "@/components/NavDrawer"
import { mapState, mapGetters } from 'vuex';

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
      ]),
      ...mapGetters([
        'getSpeed'
      ]),
      logvariables() {
        return this.vessel.logVariables;
      },
      speed() {
        return this.getSpeed(this.$route.params.vesselid);
      }
    },
    mounted() {
      const vessel = this.vessels
      .find(x => x.id === this.$route.params.vesselid);
      this.vessel = vessel;
    }/*,
    watch: {
    '$route.params': {
        function (newValue) {
            const { newVesselId } = newValue;
            const vessel = this.vessels
            .find(x => x.id === newVesselId);
            this.vessel = vessel;
        },
        immediate: true,
    }
}*/
}
</script>
