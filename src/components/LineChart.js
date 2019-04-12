import { Line } from "vue-chartjs";
import { getApiDataTest } from "../scripts/getData";
import { getApiDataTest2 } from "../scripts/getData";

export default {
  extends: Line,
  data() {
    return {
      rows: [],
      labels: [],
      logspeed: []
    };
  },

 async mounted() {
    this.rows = [];
    console.log("Trying to fetch testdata...tulling");
  await  getApiDataTest(this.rows, this.labels);
  await getApiDataTest2(this.logspeed);
    console.log(this.rows);

    this.renderChart(
      {
        labels: 
          this.labels
        ,
        datasets: [
          {
            label: "Speed gps",
            borderColor: "green",
            data: this.rows,
            pointRadius: 0
          },
          {
            label: "Speed log",
            borderColor: "blue",
            data: this.logspeed,
            pointRadius: 0
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
