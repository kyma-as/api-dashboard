<template>
  <div>
    <NavDrawer/>
    <v-content class="ma-2">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for="vess in vessels"
                  :key="vess.id" xs12 sm6 md4 lg4 xl3>
            <VesselCard :vessel="vess"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
    import NavDrawer from "@/components/NavDrawer";
    import VesselCard from "@/components/VesselCard"
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "vessels",
        components: {
            NavDrawer, VesselCard
        },

        data() {
            return {
              vessel: {}
            }
        },
        mounted() {
            // TODO: call whatever fetch method in whatever js class whatever
        },
        computed: {
          ...mapState([
            'vessels'
          ])
        }
    };
</script>
