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
    this.fuel = this.getFuel(this.$route.params.vesselid);
    let labels = ["Q1", "Q2", "Q3", "Q4"];
    let elementer = [];
    let boiler = [];
    let gcu = [];
    let ge1 = [];
    let ge2 = [];
    let ge3 = [];
    let ge4 = [];
    let array = [];
    let i = 0;
    let counter = 0;
    let Summ = 0;

    for (i = 0; i < Object.keys(this.fuel).length; i++) {
      elementer.push(Object.keys(this.fuel)[i]);
    }

    for (i = 0; i < labels.length; i++) {
      counter = 0;
      for (let key in this.fuel) {
        for (let key2 in this.fuel[key].data) {
          array.push(this.fuel[key].data[key2]);
        }
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        Summ = Summ.toFixed(2);
        array = [];

        if (counter == 0 || counter == 6 || counter == 12 || counter == 18) {
          boiler.push(Summ);
        }
        if (counter == 1 || counter == 7 || counter == 13 || counter == 19) {
          gcu.push(Summ);
        }
        if (counter == 2 || counter == 8 || counter == 14 || counter == 20) {
          ge1.push(Summ);
        }
        if (counter == 3 || counter == 9 || counter == 15 || counter == 21) {
          ge2.push(Summ);
        }
        if (counter == 4 || counter == 10 || counter == 16 || counter == 22) {
          ge3.push(Summ);
        }
        if (counter == 5 || counter == 11 || counter == 17 || counter == 23) {
          ge4.push(Summ);
        }
        counter++;
        Summ = 0;
      }
    }

    this.renderChart(
      {
        labels: labels,
        datasets: [
          {
            label: Object.keys(this.fuel)[0],
            backgroundColor: "blue",
            data: boiler
          },
          {
            label: Object.keys(this.fuel)[1],
            backgroundColor: "red",
            data: gcu
          },
          {
            label: Object.keys(this.fuel)[2],
            backgroundColor: "green",
            data: ge1
          },
          {
            label: Object.keys(this.fuel)[3],
            backgroundColor: "yellow",
            data: ge2
          },
          {
            label: Object.keys(this.fuel)[4],
            backgroundColor: "orange",
            data: ge3
          },
          {
            label: Object.keys(this.fuel)[5],
            backgroundColor: "purple",
            data: ge4
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
