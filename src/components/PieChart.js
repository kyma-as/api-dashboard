import { Pie } from "vue-chartjs";
import { getHFO, getMDO, getMGO, getLSHFO } from "../scripts/getData";

export default {
  extends: Pie,
  data() {
    return {
      HFO: [],
      MDO: [],
      MGO: [],
      LSHFO: [],
      labels: ["HFO", "MDO", "MGO", "LSHFO"]
    };
  },

  async mounted() {
    await getHFO(this.HFO);
    const HFOsumm = this.HFO.reduce((prev, cur) => prev + cur, 0);

    await getMDO(this.MDO);
    const MDOsumm = this.MDO.reduce((prev, cur) => prev + cur, 0);
 
    await getMGO(this.MGO);
    const MGOsumm = this.MGO.reduce((prev, cur) => prev + cur, 0);
 
    await getLSHFO(this.LSHFO);
    const LSHFOsumm = this.LSHFO.reduce((prev, cur) => prev + cur, 0);


    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            data: [HFOsumm, MDOsumm, MGOsumm, LSHFOsumm],
            backgroundColor: ["blue", "red", "green", "yellow", "brown"]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
