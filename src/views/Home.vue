<template>
  <div class="home">
    <NavDrawer/>
    <v-content class="ma-2">
      <v-container grid-list-lg>
        <v-layout v-for="vessel in getAllVessels" :key="vessel.id" row wrap>
          <v-card class="ma-2">
            <v-card-title>
              {{vessel.name}}
            </v-card-title>
            <span class="ma-2">
            id = {{vessel.id}}
          </span>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
    import NavDrawer from "@/components/NavDrawer";

    export default {
        name: "home",
        components: {
            NavDrawer
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