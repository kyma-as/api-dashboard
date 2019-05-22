import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
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
    let gpsDistancenaut = [];
    let gpsDistanceKM = [];
    let dataen = [];

    let labels = ["Naut","KM"];
    for (let key in this.speed.gps.dayData) {
      gpsDistancenaut.push(this.speed.gps.dayData[key]);
      gpsDistanceKM.push(this.speed.gps.dayData[key] * 1.852);
    }
    let Summnaut = gpsDistancenaut.reduce((prev, cur) => prev + cur, 0);
    Summnaut = Summnaut.toFixed(2);
    dataen.push(Summnaut);
    let Summ = gpsDistanceKM.reduce((prev, cur) => prev + cur, 0);
    Summ = Summ.toFixed(2);
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
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
