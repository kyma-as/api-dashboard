<template>
  <div>
    <li v-for="i, x in speed.log.data">
      {{ x }}
      {{ i }}
    </li>
  </div>
</template>

<script>
    import {Line} from "vue-chartjs";
    import {mapGetters } from 'vuex';
    export default {
        extends: Line,
        computed:{
            ...mapGetters([
                'getSpeed'
            ]),
            speed() {
                return this.getSpeed(this.$route.params.vesselid);
            }
        },

        async mounted() {
            let gpsSpeed = this.speed.gps.data;
            let logSpeed = this.speed.log.data;
            let labels = this.speed.labels;
            labels.length = this.gpsSpeed.length;

            let arrayLength = gpsSpeed.length;
            let Diffvar1;
            let Diffvar2;
            let diff = [];

            for (let i = 0; i < arrayLength; i++) {
                Diffvar1 = gpsSpeed[i];
                Diffvar2 = logSpeed[i];
                if (Diffvar1 > Diffvar2) {
                    diff.push(Diffvar1 - Diffvar2);
                }
                if (Diffvar1 < Diffvar2) {
                    diff.push(Diffvar2 - Diffvar1);
                }

            }
            this.renderChart(
                {
                    labels: labels,
                    datasets: [
                        {
                            label: "Speed gps",
                            borderColor: "green",
                            data: gpsSpeed,
                            pointRadius: 0
                        },
                        {
                            label: "Speed log",
                            borderColor: "blue",
                            data: logSpeed,
                            pointRadius: 0
                        },
                        {
                            label: "Diff",
                            data: diff,
                            pointBackgroundColor: "red",
                            showLine: false
                        }
                    ]
                },
                {responsive: true, maintainAspectRatio: false}
            );
        }
    };
</script>