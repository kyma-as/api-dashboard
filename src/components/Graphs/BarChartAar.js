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
    this.fuel = this.getFuel(
      this.$route.params.vesselid,
      "2017-01-01T00:00:00",
      "2018-01-01T00:00:00",
      "Hour"
    );
    let Skala;
    let labels;
    let kvartal = ["Q1", "Q2", "Q3", "Q4"];
    let Month = [
      "January",
      "Februart",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August"
    ];
    let elementer = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    let data6 = [];
    let array = [];
    let i = 0;
    let counter = 0;
    let Summ = 0;
    if (Skala == "Year") {
      labels = kvartal;
    }
    if (Skala == "HalfYear") {
      labels = Month;
    }
    if (Skala == " Month") {
      labels = kvartal;
    }
    if (Skala == "Week") {
      labels = kvartal;
    }
    if (Skala == "Day") {
      labels = kvartal;
    }
    labels = kvartal;
    for (let p = 0; p < Object.keys(this.fuel).length; p++) {
      elementer.push(Object.keys(this.fuel)[i]);
    }
    if (labels == kvartal) {
      for (i = 0; i < labels.length; i++) {
        counter = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          if (i == 0) {
            array = array.slice(0, array.length / 4);
          }
          if (i == 1) {
            array = array.slice(array.length / 4, array.length / 2);
          }
          if (i == 2) {
            array = array.slice(
              array.length / 2,
              array.length - array.length / 4
            );
          }
          if (i == 3) {
            array = array.slice(array.length - array.length / 4, array.length);
          }
          array.slice(0, array.length / 4);
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          Summ = Summ.toFixed(2);
          array = [];
          if (counter == 0 || counter == 6 || counter == 12 || counter == 18) {
            data1.push(Summ);
          }
          if (counter == 1 || counter == 7 || counter == 13 || counter == 19) {
            data2.push(Summ);
          }
          if (counter == 2 || counter == 8 || counter == 14 || counter == 20) {
            data3.push(Summ);
          }
          if (counter == 3 || counter == 9 || counter == 15 || counter == 21) {
            data4.push(Summ);
          }
          if (counter == 4 || counter == 10 || counter == 16 || counter == 22) {
            data5.push(Summ);
          }
          if (counter == 5 || counter == 11 || counter == 17 || counter == 23) {
            data6.push(Summ);
          }
          counter++;
          Summ = 0;
        }
      }
    }
    if (elementer.length > 2) {
      this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              label: Object.keys(this.fuel)[0],
              backgroundColor: "blue",
              data: data1
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "red",
              data: data2
            },
            {
              label: Object.keys(this.fuel)[2],
              backgroundColor: "green",
              data: data3
            },
            {
              label: Object.keys(this.fuel)[3],
              backgroundColor: "yellow",
              data: data4
            },
            {
              label: Object.keys(this.fuel)[4],
              backgroundColor: "orange",
              data: data5
            },
            {
              label: Object.keys(this.fuel)[5],
              backgroundColor: "purple",
              data: data6
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
    if (elementer.length == 2) {
      this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              label: Object.keys(this.fuel)[0],
              backgroundColor: "blue",
              data: data1
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "red",
              data: data2
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  }
};
