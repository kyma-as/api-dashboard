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
    for (let key in this.speed.gps.data) {
      gpsDistancenaut.push(this.speed.gps.data[key]);
      gpsDistanceKM.push(this.speed.gps.data[key] * 1.852);
    }
    let Summnaut = gpsDistancenaut.reduce((prev, cur) => prev + cur, 0);
    dataen.push(Summnaut);
    let Summ = gpsDistanceKM.reduce((prev, cur) => prev + cur, 0);
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
