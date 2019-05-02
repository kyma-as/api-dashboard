import { Line } from "vue-chartjs";
import { getApiDataTest, getApiDataTestlabels } from "../scripts/getData";
import { getApiDataTest2 } from "../scripts/getData";

export default {
  extends: Line,
  data() {
    return {
      rows: [],
      labels: [],
      logspeed: [],
      diff: []
    };
  },

  async mounted() {
    await getApiDataTest(this.rows);
    await getApiDataTest2(this.logspeed);
    await getApiDataTestlabels(this.labels);
    this.labels.length = this.rows.length;

    var arrayLength = this.rows.length;
    let Diffvar1;
    let Diffvar2;

    for (var i = 0; i < arrayLength; i++) {
      Diffvar1 = this.rows[i];
      Diffvar2 = this.logspeed[i];
      if(Diffvar1 > Diffvar2){
        this.diff.push(Diffvar1 - Diffvar2);
      }
      if(Diffvar1 < Diffvar2){
        this.diff.push(Diffvar2 - Diffvar1);
      }
   
    }
    this.renderChart(
      {
        labels: this.labels,
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
          {
            label: "DIff",
            data: this.diff,
            pointBackgroundColor: "red",
            showLine: false
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
