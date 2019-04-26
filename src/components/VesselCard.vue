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
          <h3 class="headline mb-0">{{vessel.id}}</h3>
        </div>
      </v-card-title>
      <v-img>
        <h2>Placeholder for visual data</h2>
      </v-img>
      <v-layout row wrap>
        <v-flex xs12 sm6>Speed: 1000 km/h</v-flex>
        <v-flex xs12 sm6>Fuel: 1000 litre</v-flex>
        <v-flex xs12 sm12>Vessel Status: <span class="green--text">Good</span></v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
// TODO: in v-card wrap with template (?)
// and add :to=`"/vessels/${data/hover.index}"`

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
          // TODO: does this work?
            routeOnClick() {
                this.$router.replace({name: "vessels", params: { vesselid: this.vessel.id }});
                //this.$router.push({ name: 'vessels', params: { vesselid: this.vessel.id }})
            }
        }
    }
</script>
