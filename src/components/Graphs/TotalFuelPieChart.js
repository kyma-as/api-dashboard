import { Pie } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Pie,
  computed: {
    ...mapGetters(["getFuel"]),
    fDate() {
      return this.$store.state.fromDate;
    },
    tDate() {
      return this.$store.state.toDate;
    }
  },
  data() {
    return {
      fuel: {}
    };
  },

  mounted() {
    let fromDate = this.fDate;
    let toDate = this.tDate;
    this.fuel = this.getFuel(
      this.$route.params.vesselid,
      fromDate,
      toDate,
      "Hour"
    );
    let labels = [];
    let dataen = [];
    let array = [];
    let text = "Total Fuel Used";
    let Summ = 0;
    let i = 0;
    let names = [];

    for (i = 1; i < Object.keys(this.fuel).length; i++) {
      labels.push(Object.keys(this.fuel)[i]);
    }

    for(let f in this.fuel) {
      names.push(this.fuel[f].name);
    }

    for (let key in this.fuel) {
      for (let key2 in this.fuel[key].data) {
        array.push(this.fuel[key].data[key2]);
      }
      Summ = array.reduce((prev, cur) => prev + cur, 0);
      Summ = Summ.toFixed(2);

      dataen.push(Summ);
      array = [];
      Summ = 0;
    }
    this.renderChart(
      {
        labels: names,
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
            ]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: text
        }
      }
    );
  }
};
