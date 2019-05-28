<template>
  <v-hover>
    <v-card
        @click="routeOnClick"
        class="pa-2 mx-auto"
        lazy
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2 }`"
    >
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{vessel.name}}</h3>
        </div>
      </v-card-title>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-model="speed">Speed: {{speed}} knots</v-flex>
        <v-flex xs12 sm6>Fuel: 1000 litre</v-flex>
        <v-flex xs12 sm12>Vessel Status: <span class="green--text">Good</span></v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                speed: "undefined"
            }
        },
        components: {},
        props: {
            vessel: {
                type: Object,
                required: true
            }
        },
        computed: {
            fetchUrl: function () {
                return this.$store.state.url;
            },
            headerInfo: function () {
                return this.$store.state.header;
            },
            ...mapGetters(['getSpeed'])
        },
        mounted() {
            this.getCurrentSpeed();
        },
        methods: {
            routeOnClick() {
                this.$router.replace({name: "vessel", params: {vesselid: this.vessel.id}});
            },
            getCurrentSpeed: async function () {
                let vesselId = this.vessel.id;
                let today = this.$store.state.dateToday + "T00:00:00";
                let yesterday = this.$store.state.dateYesterday + "T00:00:00";
                let _this = this;

                function checkSpeedTimer() {
                    console.log(vesselId);
                    console.log(today);
                    console.log(yesterday);
                    let speed = _this.getSpeed(vesselId, yesterday, today, "QuarterHour").gps.data;
                    console.log(speed);
                }

                setInterval(checkSpeedTimer, 2500);
            }
        }
    }
</script>
