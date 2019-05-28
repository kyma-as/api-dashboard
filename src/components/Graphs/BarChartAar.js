import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  data() {
    return {
      fuel: {}
    };
  },
  computed: {
    ...mapGetters(["getFuel"]),
    fDate(){
      return this.$store.state.fromDate;
    },
    tDate(){
      return this.$store.state.toDate;
    }
  },
  mounted() {
    let fromDate = this.fDate;
    let toDate = this.tDate;
    console.log()
    let day = [];
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
    let hjelpeslicer1 = 0;
    let hjelpeslicer2 = 0;
    let labels;
    let yakse = "Kg";
    let kvartal = ["Q1", "Q2", "Q3", "Q4"];
    let months = [
      "January",
      "Februart",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    let month = [];
    let bool = false;
    this.fuel = this.getFuel(
      this.$route.params.vesselid,
      fromDate,
      toDate,
      "Hour"
    );

    labels = kvartal;
    if (fromDate.substring(0, 4) == toDate.substring(0, 4)) {
      for (let k = 0; k < 13; k++) {
        if (0 + k == fromDate.substring(5, 7)) {
          bool = true;
        }
        if (bool) {
          month.push(months[k - 1]);
        }
        if (0 + k == toDate.substring(5, 7)) {
          bool = false;
        }
      }
      labels = month;
    }

    if (fromDate.substring(0, 4) == toDate.substring(0, 4)) {
      if (fromDate.substring(5, 7) == toDate.substring(5, 7)) {
        for (let k = 0; k < 10; k++) {
          if ("0" + k == fromDate.substring(8, 10)) {
            bool = true;
          }
          if (bool) {
            day.push("0" + k);
          }
          if ("0" + k == toDate.substring(8, 10)) {
            bool = false;
          }
        }
        for (let k = 10; k < 32; k++) {
          if (k == fromDate.substring(8, 10)) {
            bool = true;
          }
          if (bool) {
            day.push(k);
          }
          if (0 + k == toDate.substring(8, 10)) {
            bool = false;
          }
        }
        labels = day;
      }
    }

    if (labels == kvartal) {
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }

      for (i = 0; i < labels.length; i++) {
        counter = 0;
        hjelpeslicer1 = hjelpeslicer2;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }

          hjelpeslicer2 = ((i + 1) * array.length) / labels.length;
          array = array.slice(
            hjelpeslicer1,
            ((i + 1) * array.length) / labels.length
          );

          Summ = array.reduce((prev, cur) => prev + cur, 0);
          Summ = Summ.toFixed(2);

          if (counter == 0) {
            data1.push(Summ);
          }
          if (counter == 1) {
            data2.push(Summ);
          }
          if (counter == 2) {
            data3.push(Summ);
          }
          if (counter == 3) {
            data4.push(Summ);
          }
          if (counter == 4) {
            data5.push(Summ);
          }
          if (counter == 5) {
            data6.push(Summ);
          }
          counter++;
          Summ = 0;
          array = [];
        }
      }
    }
    if (labels == month) {
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }
      for (i = 0; i < labels.length; i++) {
        counter = 0;
        hjelpeslicer1 = hjelpeslicer2;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }

          hjelpeslicer2 = ((i + 1) * array.length) / labels.length;
          array = array.slice(
            hjelpeslicer1,
            ((i + 1) * array.length) / labels.length
          );

          Summ = array.reduce((prev, cur) => prev + cur, 0);
          Summ = Summ.toFixed(2);
          array = [];

          if (counter == 0) {
            data1.push(Summ);
          }
          if (counter == 1) {
            data2.push(Summ);
          }
          if (counter == 2) {
            data3.push(Summ);
          }
          if (counter == 3) {
            data4.push(Summ);
          }
          if (counter == 4) {
            data5.push(Summ);
          }
          if (counter == 5) {
            data6.push(Summ);
          }

          counter++;
          Summ = 0;
        }
      }
    }
    if (labels == day) {
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }
      for (i = 0; i < labels.length; i++) {
        counter = 0;
        hjelpeslicer1 = hjelpeslicer2;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }

          hjelpeslicer2 = ((i + 1) * array.length) / labels.length;
          array = array.slice(
            hjelpeslicer1,
            ((i + 1) * array.length) / labels.length
          );

          Summ = array.reduce((prev, cur) => prev + cur, 0);
          Summ = Summ.toFixed(2);
          array = [];
          if (counter == 0) {
            data1.push(Summ);
          }
          if (counter == 1) {
            data2.push(Summ);
          }
          if (counter == 2) {
            data3.push(Summ);
          }
          if (counter == 3) {
            data4.push(Summ);
          }
          if (counter == 4) {
            data5.push(Summ);
          }
          if (counter == 5) {
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
        { responsive: true, maintainAspectRatio: false,scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: yakse,
                backgroundColor: "red"
              }
            }
          ]
        } }
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
