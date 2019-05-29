import { Pie } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Pie,
  computed: {
    ...mapGetters(["getFuel"])
  },
  data() {
    return {
      fuel: {}
    };
  },

  mounted() {
    this.fuel = this.getFuel(
      this.$route.params.vesselid,
      "2019-04-20T00:00:00",
      "2019-05-01T00:00:00",
      "Hour"
    );
    let labels = [];
    let dataen = [];
    let array = [];
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
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
