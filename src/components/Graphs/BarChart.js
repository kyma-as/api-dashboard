import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getFuel"])
  },
  data() {
    return {
      fuel: {}
    };
  },

  mounted() {
    this.fuel = this.getFuel(this.$route.params.vesselid,
    "2018-01-01T00:00:00","2019-01-01T00:00:00", "Hour");
    let labels = [];
    let dataen = [];
    let array = [];
    let i = 0;
    for (i = 0; i < Object.keys(this.fuel).length; i++) {
      labels.push(Object.keys(this.fuel)[i]);
    }
    for (let key in this.fuel) {
      for (let key2 in this.fuel[key].data) {
        array.push(this.fuel[key].data[key2]);
      }

      let Summ = array.reduce((prev, cur) => prev + cur, 0);
      array = [];
      Summ = Summ.toFixed(2);
      dataen.push(Summ);
      Summ = 0;
    }

    this.renderChart(
      {
        labels: Object.keys(this.fuel),
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
            label: "Fuel"
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
