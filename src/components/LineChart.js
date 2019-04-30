import { Line } from "vue-chartjs";
import { getApiDataTest, getApiDataTestlabels } from "../scripts/getData";
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
    await getApiDataTest(this.rows);
    await getApiDataTest2(this.logspeed);
    await getApiDataTestlabels(this.labels);
    this.labels.length = this.rows.length;
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Speed gps",
            borderColor: "green",
            data: this.rows
          },
          {
            label: "Speed log",
            borderColor: "blue",
            data: this.logspeed
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
