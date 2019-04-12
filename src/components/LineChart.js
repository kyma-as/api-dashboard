import { Line } from "vue-chartjs";
import { getApiDataTest } from "../scripts/getData";

export default {
  extends: Line,
  data() {
    return {
      rows: []
    };
  },

 async mounted() {
    this.rows = [];
    console.log("Trying to fetch testdata...tulling");
  await  getApiDataTest(this.rows);
    console.log(this.rows);

    this.renderChart(
      {
        labels: 
          this.rows
        ,
        datasets: [
          {
            label: "Speed",
            backgroundColor: "green",
            data: this.rows
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
