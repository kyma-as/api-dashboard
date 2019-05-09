import { Pie } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Pie,
  computed: {
    ...mapGetters(["getFuel"])
  },
  data() {
    return {
      fuel: {}
    };
  },

  mounted() {
    this.fuel = this.getFuel(this.$route.params.vesselid);
    let labels = [];
    let dataen = [];
    let array = [];
    let variabel
    let i = 0;

    for (i = 0; i < Object.keys(this.fuel).length; i++) {
      labels.push(Object.keys(this.fuel)[i])

      variabel = Object.keys(this.fuel)[i]
    } 
    for (let key in this.fuel) {
      for (let key2 in this.fuel[key].data){
        array.push(this.fuel[key].data[key2])
      }
 
      let Summ = array.reduce((prev, cur) => prev + cur, 0);
      dataen.push(Summ)
    }

    console.log(dataen)
    
  


    this.renderChart(
      {
        labels: Object.keys(this.fuel),
        datasets: [
          {
            data: dataen,
            backgroundColor: ["blue", "red", "green", "yellow", "orange","purple","black"]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
