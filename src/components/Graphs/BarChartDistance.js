import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
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
    let gpsDistancenaut = [];
    let gpsDistanceKM = [];
    let dataen = [];
    let yakse = "KM";
    let names = [];

    let labels = ["Naut", "KM"];
    for (let key in this.speed.gps.data) {
      gpsDistancenaut.push(this.speed.gps.data[key]);
      gpsDistanceKM.push(this.speed.gps.data[key] * 1.852);
    }
    let Summnaut = gpsDistancenaut.reduce((prev, cur) => prev + cur, 0);
    Summnaut = Summnaut.toFixed(2);

    let Summ = gpsDistanceKM.reduce((prev, cur) => prev + cur, 0);
    Summ = Summ.toFixed(2);

    if (Summ.length > 3 && Summnaut.length > 3) {
      Summ = Summ / 10;
      Summnaut = Summnaut / 10;
      yakse = "Total KM in 10";
    }
    dataen.push(Summnaut);
    dataen.push(Summ);

    this.renderChart(
      {
        labels: labels,
        datasets: [
          {
            data: dataen,
            backgroundColor: [
              "blue",
              "red",
              "green",
              "yellow",
              "orange",
              "purple",
              "black"
            ],
            label: "Distance"
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
        }
      }
    );
  }
};
