<template>
<div class="vessel">
    <NavDrawer />
    <v-content>
        <span>Welcome to ship {{vessel.name}}.
          {{ vessel.id }} == {{ this.$route.params.vesselid }}</span>
          <ul id="example-1">
            <li v-for="lvar in logvariables">
              <p> {{ lvar.name }} ---> {{ lvar.id }} </p>
            </li>
          </ul>
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
      ]),
      logvariables() {
        return this.vessel.logVariables;
      }
    },
    mounted() {
      const vessel = this.vessels
      .find(x => x.id === this.$route.params.vesselid);
      this.vessel = vessel;
    } /*,
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
