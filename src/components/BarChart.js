import { Bar } from "vue-chartjs";
import {
  getHFO,
  getMDO,
  getMGO,
  getLSHFO,
  getSlip,
  getISOMDO
} from "../scripts/getData";

export default {
  extends: Bar,
  data() {
    return {
      HFO: [],
      MDO: [],
      ISOMDO: [],
      MGO: [],
      Slip: [],
      LSHFO: [],
      labels: ["HFO", "MDO", "ISOMDO", "MGO", "LSHFO"]
    };
  },

  async mounted() {
    await getHFO(this.HFO);
    const HFOsumm = this.HFO.reduce((prev, cur) => prev + cur, 0);

    await getMDO(this.MDO);
    const MDOsumm = this.MDO.reduce((prev, cur) => prev + cur, 0);

    await getISOMDO(this.ISOMDO);
    const ISOMDOsumm = this.ISOMDO.reduce((prev, cur) => prev + cur, 0);

    await getMGO(this.MGO);
    const MGOsumm = this.MGO.reduce((prev, cur) => prev + cur, 0);

    await getLSHFO(this.LSHFO);
    const LSHFOsumm = this.LSHFO.reduce((prev, cur) => prev + cur, 0);

    await getSlip(this.Slip);

    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            data: [HFOsumm, MDOsumm, ISOMDOsumm, MGOsumm, LSHFOsumm],
            backgroundColor: ["blue", "red", "green", "yellow", "brown"],
            label: "Fuel"
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
