import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  computed: {
    ...mapGetters(["getSpeed"]),
    fDate() {
      return this.$store.state.fromDate;
    },
    tDate() {
      return this.$store.state.toDate;
    }
  },
  data() {
    return {
      speed: {}
    };
  },

  mounted() {
    let fromDate = this.fDate;
    let toDate = this.tDate;
    this.speed = this.getSpeed(
      this.$route.params.vesselid,
      fromDate,
      toDate,
      "Hour"
    );
    let gpsSpeed = [];
    let logSpeed = [];
    let labels = [];
    let yakse = "Knot";
    let formatting;
    let names = [];

    for (let key in this.speed.gps.data) {
      gpsSpeed.push(this.speed.gps.data[key].toFixed(2));
      formatting = key;
      formatting = formatting.substring(0, 10);
      labels.push(formatting);
    }
    for (let key in this.speed.log.data) {
      logSpeed.push(this.speed.log.data[key].toFixed(2));
    }


    if (labels.length < 49) {
      logSpeed = [];
      labels = [];
      gpsSpeed = [];
      for (let key in this.speed.gps.data) {
        gpsSpeed.push(this.speed.gps.data[key].toFixed(2));
        formatting = key;
        formatting = formatting.substring(11);
        labels.push(formatting);
      }
      for (let key in this.speed.log.data) {
        logSpeed.push(this.speed.log.data[key].toFixed(2));
      }
    }
    // pushes variable names to array
    for (let f in this.speed) {
      names.push(this.speed[f].name);
    }

    let diff = [];
    let decimal;
    for (let i = 0; i < gpsSpeed.length; i++) {
      let Diffvar1 = gpsSpeed[i];
      let Diffvar2 = logSpeed[i];

      decimal = Diffvar1 - Diffvar2;
      decimal = decimal.toFixed(2);
      decimal = Math.abs(decimal);
      diff.push(decimal);
    }

    this.renderChart(
      {
        labels: labels,
        datasets: [
          {
            label: names[0],
            borderColor: "green",
            data: gpsSpeed,
            pointRadius: 0
          },
          {
            label: names[1],
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
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: yakse,
                backgroundColor: "red"
              }
            }
          ]
        }, title: {
          FontSize: 90,
          display: true,
          text: "Speed",
          
        }
      }
    );
  }
};
