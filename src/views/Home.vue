<template>
  <div class="home">
    <NavDrawer/>
    <v-content class="ma-2">
      <v-container grid-list-lg>
        <v-layout
            v-for="vessel in getAllVessels"
            :key="vessel.id"
            row wrap>
          <VesselCard :vessel="vessel"/>
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
            NavDrawer,VesselCard
        },

        data() {
            return {
                allVessels: [{name: "vessel1", id: 1}, {name: "vessel2", id: 2}],
            };
        },
        mounted() {
            this.$store.commit('setAllVessels');
        },
        methods: {},
        computed: {
            getAllVessels() {
                return this.$store.state.allVessels
            }
        }
    };
</script>