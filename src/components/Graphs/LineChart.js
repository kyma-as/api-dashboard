import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  computed: {
    ...mapGetters(["getSpeed"])
  },
  data() {
    return {
      speed: {}
    };
  },

  mounted() {
    this.speed = this.getSpeed(this.$route.params.vesselid);
    let gpsSpeed = [];
    let logSpeed = [];
    let labels = [];
    
    for (let key in this.speed.gps.data) {
      gpsSpeed.push(this.speed.gps.data[key].toFixed(2));
      labels.push(key);
    }
    for (let key in this.speed.log.data) {
      logSpeed.push(this.speed.log.data[key].toFixed(2));
    }

    let diff = [];
    let decimal;
    for (let i = 0; i < gpsSpeed.length; i++) {
      let Diffvar1 = gpsSpeed[i];
      let Diffvar2 = logSpeed[i];
      if (Diffvar1 > Diffvar2) {
        decimal = Diffvar1 - Diffvar2;
        decimal = decimal.toFixed(2);
        diff.push(decimal);
      }
      if (Diffvar1 <= Diffvar2) {
        decimal = Diffvar2 - Diffvar1;
        decimal = decimal.toFixed(2);
        diff.push(decimal);
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
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
