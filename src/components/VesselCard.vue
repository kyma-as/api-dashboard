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
      <v-img :src="images.vesselIcon"/>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-model="speed"><span class="font-weight-bold">Speed:</span> {{speed}}kt</v-flex>
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
                speed: "0",
                images: {
                    vesselIcon: require('../assets/vessel.png')
                }
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
                let today = this.$store.state.dateToday;
                let yesterday = this.$store.state.dateYesterday;
                let _this = this;
                let d = new Date();

                // This was created with the thought of the data being fetched continually
                function checkSpeedTimer() {
                    let speed = Object.values(
                        _this.getSpeed(vesselId, yesterday + `T${d.getHours()}:${d.getMinutes()}:00`, today + `T${d.getHours}:${d.getMinutes()}:00`, "QuarterHour").gps.data);
                    speed = speed[speed.length - 1];
                    if (!!speed)
                        _this.speed = speed.toFixed(2);
                }

                setInterval(checkSpeedTimer, 1000);
            }
        }
    }
</script>
