<template>
  <v-hover>
    <v-card
        @click="routeOnClick"
        class="pa-2 mx-auto"
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2 }`"
    >
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{vessel.name}}</h3>
        </div>
      </v-card-title>
      <v-img>
        <h2>Placeholder for visual data</h2>
      </v-img>
      <v-layout justify-center>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
    export default {
        data() {
            return {
                //Ship data
            }
        },
        props: {
            vessel: {
                type: Object,
                required: true
            }
        },
        methods: {
            routeOnClick() {
                this.$router.replace({name: "vessel"})
                console.log("Clicked a card")
            }
        },
        computed: {
            getAllVessels() {
                console.log("test")
                return this.$store.getAllVessels
            }
        }
    }
</script>
