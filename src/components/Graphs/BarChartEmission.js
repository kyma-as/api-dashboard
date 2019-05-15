import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getEmission"])
  },
  data() {
    return {
      emission: {}
    };
  },

  mounted() {
    this.emission = this.getEmission(this.$route.params.vesselid);
    let labels = [];
    let dataen = [];
    let array = [];
    let i = 0;
    for (i = 0; i < Object.keys(this.emission).length; i++) {
      labels.push(Object.keys(this.emission)[i]);
    }
    for (let key in this.emission) {
      for (let key2 in this.emission[key].data) {
        array.push(this.emission[key].data[key2]);
      }

      let Summ = array.reduce((prev, cur) => prev + cur, 0);
      array = [];
      dataen.push(Summ);
      Summ = 0;
    }

    this.renderChart(
      {
        labels: Object.keys(this.emission),
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
            label: "emission"
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
