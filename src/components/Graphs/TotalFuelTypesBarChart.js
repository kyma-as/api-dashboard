import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getFuelTypes"]),
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

    this.fuel = this.getFuelTypes(
      this.$route.params.vesselid,
      fromDate,
      toDate,
      "Hour"
    );
    let labels = [];
    let dataen = [];
    let array = [];
    let yakse = "Total Kg Used";
    let i = 0;
    let elementer = [];

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
    for (let p = 0; p < Object.keys(this.fuel).length; p++) {
      elementer.push(Object.keys(this.fuel)[i]);
    }
    labels = ["Total Used"];
    if (elementer.length > 2) {
      this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              label: Object.keys(this.fuel)[0],
              backgroundColor: "blue",
              data: [dataen[0]]
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "maroon",
              data: [dataen[1]]
            },
            {
              label: Object.keys(this.fuel)[2],
              backgroundColor: "green",
              data: [dataen[2]]
            },
            {
              label: Object.keys(this.fuel)[3],
              backgroundColor: "yellow",
              data: [dataen[3]]
            },
            {
              label: Object.keys(this.fuel)[4],
              backgroundColor: "orange",
              data: [dataen[4]]
            },
            {
              label: Object.keys(this.fuel)[5],
              backgroundColor: "teal",
              data: [dataen[5]]
            },
            {
              label: Object.keys(this.fuel)[6],
              backgroundColor: "darkgreen",
              data: [dataen[6]]
            },
            {
              label: Object.keys(this.fuel)[7],
              backgroundColor: "red",
              data: [dataen[7]]
            },
            {
              label: Object.keys(this.fuel)[8],
              backgroundColor: "brown",
              data: [dataen[8]]
            },
            {
              label: Object.keys(this.fuel)[9],
              backgroundColor: "royalblue",
              data: [dataen[9]]
            },
            {
              label: Object.keys(this.fuel)[10],
              backgroundColor: "purple",
              data: [dataen[10]]
            },
            {
              label: Object.keys(this.fuel)[11],
              backgroundColor: "black",
              data: [dataen[11]]
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
                  labelString: yakse
                }
              }
            ]
          }
        }
      );
    }
    if (elementer.length == 2) {
      this.renderChart(
        {
          datasets: [
            {
              label: Object.keys(this.fuel)[0],
              backgroundColor: "blue",
              data: [dataen[0]]
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "maroon",
              data: [dataen[1]]
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
                  labelString: yakse
                }
              }
            ]
          }
        }
      );
    }    if (elementer.length == 4) {
      this.renderChart(
        {
          datasets: [
            {
              label: Object.keys(this.fuel)[0],
              backgroundColor: "blue",
              data: [dataen[0]]
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "maroon",
              data: [dataen[1]]
            },
            {
              label: Object.keys(this.fuel)[2],
              backgroundColor: "green",
              data: [dataen[2]]
            },
            {
              label: Object.keys(this.fuel)[3],
              backgroundColor: "yellow",
              data: [dataen[3]]
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
                  labelString: yakse
                }
              }
            ]
          }
        }
      );
    }
  }
};
