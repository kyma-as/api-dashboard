import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getFuelTypes"]),
    
  },
  data() {
    return {
      fuel: {}
    };
  },

  mounted() {
   
    let fromDate= "2019-04-04T00:00:00";
    let toDate= "2019-04-15T00:00:00";
    let day = [];
    let yakse = "kg";
    let elementer = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let data5 = [];
    let data6 = [];
    let data7 = [];
    let data8 = [];
    let data9 = [];
    let data10 = [];
    let data11 = [];
    let data12 = [];
    let array = [];
    let i = 0;
    let counter = 0;
    let Summ = 0;
    let hjelpeslicer1 = 0;
    let hjelpeslicer2 = 0;
    let labels;
    let kvartal = ["Q1", "Q2", "Q3", "Q4"];
    let names = [];
    let months = [
      "January",
      "February",
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
    let month = [];
    let bool = false;

    this.fuel = this.getFuelTypes(
      110,
      fromDate,
      toDate,
      "Hour"
    );
    // pushes all variable names into array
    for (let f in this.fuel) {
      names.push(this.fuel[f].name);
    }
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
          if (counter == 6) {
            data7.push(Summ);
          }
          if (counter == 7) {
            data8.push(Summ);
          }
          if (counter == 8) {
            data9.push(Summ);
          }
          if (counter == 9) {
            data10.push(Summ);
          }
          if (counter == 10) {
            data11.push(Summ);
          }
          if (counter == 11) {
            data12.push(Summ);
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
          if (counter == 6) {
            data7.push(Summ);
          }
          if (counter == 7) {
            data8.push(Summ);
          }
          if (counter == 8) {
            data9.push(Summ);
          }
          if (counter == 9) {
            data10.push(Summ);
          }
          if (counter == 10) {
            data11.push(Summ);
          }
          if (counter == 11) {
            data12.push(Summ);
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
          if (counter == 6) {
            data7.push(Summ);
          }
          if (counter == 7) {
            data8.push(Summ);
          }
          if (counter == 8) {
            data9.push(Summ);
          }
          if (counter == 9) {
            data10.push(Summ);
          }
          if (counter == 10) {
            data11.push(Summ);
          }
          if (counter == 11) {
            data12.push(Summ);
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
              label: names[0],
              backgroundColor: "blue",
              data: data1
            },
            {
              label: names[1],
              backgroundColor: "maroon",
              data: data2
            },
            {
              label: names[2],
              backgroundColor: "green",
              data: data3
            },
            {
              label: names[3],
              backgroundColor: "yellow",
              data: data4
            },
            {
              label: names[4],
              backgroundColor: "orange",
              data: data5
            },
            {
              label: names[5],
              backgroundColor: "purple",
              data: data6
            },
            {
              label: names[6],
              backgroundColor: "black",
              data: data7
            },
            {
              label: names[7],
              backgroundColor: "teal",
              data: data8
            },
            {
              label: names[8],
              backgroundColor: "pink",
              data: data9
            },
            {
              label: names[9],
              backgroundColor: "brown",
              data: data10
            },
            {
              label: names[10],
              backgroundColor: "royalblue",
              data: data11
            },
            {
              label: names[11],
              backgroundColor: "red",
              data: data12
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
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
          },
          title: {
            FontSize: 90,
            display: true,
            text: "Total Fuel Used "
          }
        }
      );
    }
    if (elementer.length == 2) {
      this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              label: names[0],
              backgroundColor: "blue",
              data: data1
            },
            {
              label: Object.keys(this.fuel)[1],
              backgroundColor: "maroon",
              data: data2
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
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
          },
          title: {
            FontSize: 90,
            display: true,
            text: "Total Fuel Used "
          }
        }
      );
    }
    if (elementer.length == 4) {
      this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              label: names[0],
              backgroundColor: "blue",
              data: data1
            },
            {
              label: names[1],
              backgroundColor: "maroon",
              data: data2
            },
            {
              label: names[2],
              backgroundColor: "green",
              data: data3
            },
            {
              label: names[3],
              backgroundColor: "yellow",
              data: data4
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
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
          },
          title: {
            FontSize: 90,
            display: true,
            text: "Total Fuel Used "
          }
        }
      );
    }
  }
};
