import { Bar, mixins } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  computed: {
    ...mapGetters(["getSpeed"]),
    fDate() {
      return this.$store.state.fromDate;
    },
    tDate() {
      return this.$store.state.toDate;
    },
    speed() {
      return this.getSpeed(this.$route.params.vesselid,
      this.fDate, this.tDate, "Hour");
    }
  },
  data() {
    return {
      yakse: "KM",
      names: ["Nautikal", "KM"]
    };
  },
  methods: {
    // creates Naut and KM arrays from the gps data points
    gpsDataToArrays: function () {
      let distNaut = [];
      let distKm = [];
      for (let key in this.speed.gps.data) {
        distNaut.push(this.speed.gps.data[key]);
        distKm.push(this.speed.gps.data[key] * 1.852);
      }
      return [distNaut, distKm];
    },
    // calculates the sum of Naut and KM,
    // and generates an object with props to plot into chart
    gpsToJson: function () {
      let nautAndKm = this.gpsDataToArrays();
      let nautSum = nautAndKm[0].reduce((prev, cur) => prev + cur, 0);
      nautSum.toFixed(2);
      let kmSum = nautAndKm[1].reduce((prev, cur) => prev + cur, 0);
      kmSum.toFixed(2);

      // reduce size of sums ?
      if (nautSum.length > 3 && kmSum.length > 3) {
        nautSum = nautSum / 10;
        kmSum = kmSum / 10;
        this.yakse = "Total KM in 10";
      }

      return {
        naut: {
          data: nautAndKm[0],
          sum: nautSum
        },
        km: {
          data: nautAndKm[1],
          sum: kmSum
        }
      };
    }
  },
  mounted() {
    // let gpsDistancenaut = [];
    // let gpsDistanceKM = [];
    // let dataen = [];
    // let yakse = "KM";
    // let names = ["Nautikal", "KM"];
    // for (let key in this.speed.gps.data) {
    //   gpsDistancenaut.push(this.speed.gps.data[key]);
    //   gpsDistanceKM.push(this.speed.gps.data[key] * 1.852);
    // }
    // let Summnaut = gpsDistancenaut.reduce((prev, cur) => prev + cur, 0);
    // Summnaut = Summnaut.toFixed(2);
    //
    // let Summ = gpsDistanceKM.reduce((prev, cur) => prev + cur, 0);
    // Summ = Summ.toFixed(2);
    //
    // if (Summ.length > 3 && Summnaut.length > 3) {
    //   Summ = Summ / 10;
    //   Summnaut = Summnaut / 10;
    //   yakse = "Total KM in 10";
    // }
    // dataen.push(Summnaut);
    // dataen.push(Summ);
    // // pushes variable names to array

    let nautAndKm = this.gpsToJson();

    this.renderChart(
      {
        labels: ["Total"],
        datasets: [
          {
            data: nautAndKm.naut.data,
            backgroundColor: ["green"],
            label: this.names[0]
          },
          {
            data: nautAndKm.km.data,
            backgroundColor: ["yellow"],
            label: this.names[1]
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
                labelString: this.yakse,
                backgroundColor: "red"
              }
            }
          ]
        },
        title: {
          FontSize: 90,
          display: true,
          text: "Distance Traveled"
        }
      }
    );
  }
};
