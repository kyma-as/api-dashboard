import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getEmission"]),
    fDate() {
      return this.$store.state.fromDate;
    },
    tDate() {
      return this.$store.state.toDate;
    }
  },
  data() {
    return {
      emission: {}
    };
  },

  mounted() {
    let fromDate = this.fDate;
    let toDate = this.tDate;
    this.emission = this.getEmission(
      this.$route.params.vesselid,
      fromDate,
      toDate,
      "Hour"
    );
    let labels = [];
    let dataen = [];
    let array = [];
    let yakse = "Kg";
    let names = [];
    let i = 0;
    for (i = 0; i < Object.keys(this.emission).length; i++) {
      labels.push(Object.keys(this.emission)[i]);
    }
    // pushes all variable names to array
    for (let f in this.emission) {
      names.push(this.emission[f].name);
    }

    for (let key in this.emission) {
      for (let key2 in this.emission[key].data) {
        array.push(this.emission[key].data[key2]);
      }

      let Summ = array.reduce((prev, cur) => prev + cur, 0);
      array = [];
      Summ = Summ.toFixed(2);
      dataen.push(Summ);
      Summ = 0;
    }

    this.renderChart(
      {
        labels: ["Total"],
        datasets: [
          {
            data: [dataen[0]],
            backgroundColor: ["green"],
            label: names[0]
          },
          {
            data: [dataen[1]],
            backgroundColor: ["black"],
            label: names[1]
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
        },
        title: {
          FontSize: 90,
          display: true,
          text: "Total Emissions"
        }
      }
    );
  }
};
