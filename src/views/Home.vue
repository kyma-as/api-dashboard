<template>
  <div class="home">
    <NavDrawer/>
    <v-content class="ma-2">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex v-for="vessel in getAllVessels"
                  :key="vessel.id" xs12 sm6 md4 lg4 xl3>
            <VesselCard :vessel="vessel"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
    import NavDrawer from "@/components/NavDrawer";
    import VesselCard from "@/components/VesselCard"

    export default {
        name: "home",
        components: {
            NavDrawer, VesselCard
        },

        data() {
            return {
              vessels: {}
            }
        },
        mounted() {
            //call whatever fetch method in whatever js class whatever
            //this.$store.commit('setAllVessels');
        },
        methods: {},
        computed: {
            // getAllVessels() {
            //     return this.$store.state.allVessels
            // }

        }
    };
</script>
