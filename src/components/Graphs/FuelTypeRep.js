import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";
import { parse } from "terser";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getFuelTypes"])
  },
  data() {
    return {
      fuel: {}
    };
  },
  props: {
    selectedVessels: String,
    selectedTimeFrame: String,
    selectedYear: String,
    selectedMonth: String,

  },
  mounted() {
    let vessel = parseInt(this.selectedVessels);
    let timeframe = this.selectedTimeFrame;
    let year = this.selectedYear;
    let month = this.selectedMonth;

    let Nyear = parseInt(year) + 1;

    let fromDate = year + "-01-01T00:00:00";
    let toDate = Nyear + "-01-01T00:00:00";

    let yakse = "kg";
    let labels = [];
    let names = [];
    let elementer = [];

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
    let i = 0;
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let hdata1 = [];
    let hdata2 = [];
    let hdata3 = [];
    let hdata4 = [];
    let data5 = [];
    let data6 = [];
    let data7 = [];
    let data8 = [];
    let data9 = [];
    let data10 = [];
    let data11 = [];
    let data12 = [];
    let days = [];
    let hilfe = [];
    let array = [];
    let Summ = 0;
    let datekeeper = "";
    let datehelper = fromDate;

    for (i = 0; i < 31; i++) {
      if (i < 10) {
        days.push("0" + i);
      }
      if (i > 9) {
        days.push(i);
      }
    }

    if (timeframe == "Quarters") {

      labels = ["Q1", "Q2", "Q3", "Q4"];
      this.fuel = this.getFuelTypes(vessel, fromDate, toDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }
      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
      }

      for (let key in this.fuel) {
        for (let key2 in this.fuel[key].data) {
          array.push(this.fuel[key].data[key2]);
        }
        console.log(array)
        hilfe = array;
        array = array.slice(0, 2153);
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        Summ = Summ.toFixed(2);
        hdata1.push(Summ);
        array = hilfe;
        array = array.slice(2153, 4337);
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        Summ = Summ.toFixed(2);
        hdata2.push(Summ);
        array = hilfe;
        array = array.slice(4337, 6431);
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        Summ = Summ.toFixed(2);
        hdata3.push(Summ);
        array = hilfe;
        array = array.slice(6431, 8614);
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        Summ = Summ.toFixed(2);
        hdata4.push(Summ);
        Summ = 0;
        array = [];
      }

      i = 0;
      data1.push(hdata1[i]);
      data1.push(hdata2[i]);
      data1.push(hdata3[i]);
      data1.push(hdata4[i]);
      i++;
      data2.push(hdata1[i]);
      data2.push(hdata2[i]);
      data2.push(hdata3[i]);
      data2.push(hdata4[i]);
      i++;
      data3.push(hdata1[i]);
      data3.push(hdata2[i]);
      data3.push(hdata3[i]);
      data3.push(hdata4[i]);
      i++;
      data4.push(hdata1[i]);
      data4.push(hdata2[i]);
      data4.push(hdata3[i]);
      data4.push(hdata4[i]);
      i++;
      data5.push(hdata1[i]);
      data5.push(hdata2[i]);
      data5.push(hdata3[i]);
      data5.push(hdata4[i]);
      i++;
      data6.push(hdata1[i]);
      data6.push(hdata2[i]);
      data6.push(hdata3[i]);
      data6.push(hdata4[i]);
      i++;
      data7.push(hdata1[i]);
      data7.push(hdata2[i]);
      data7.push(hdata3[i]);
      data7.push(hdata4[i]);
      i++;
      data8.push(hdata1[i]);
      data8.push(hdata2[i]);
      data8.push(hdata3[i]);
      data8.push(hdata4[i]);
      i++;
      data9.push(hdata1[i]);
      data9.push(hdata2[i]);
      data9.push(hdata3[i]);
      data9.push(hdata4[i]);
      i++;
      data10.push(hdata1[i]);
      data10.push(hdata2[i]);
      data10.push(hdata3[i]);
      data10.push(hdata4[i]);
      i++;
      data11.push(hdata1[i]);
      data11.push(hdata2[i]);
      data11.push(hdata3[i]);
      data11.push(hdata4[i]);
    }

    if (timeframe == "Months") {

      labels = months;
      datehelper = fromDate;
      this.fuel = this.getFuelTypes(vessel, fromDate, toDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }

      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
      }

      for (i = 2; i < labels.length + 1; i++) {
        datekeeper = fromDate.substring(0, 5) + "0" + i + fromDate.substring(7);
        if (i > 9) {
          datekeeper = fromDate.substring(0, 5) + i + fromDate.substring(7);
        }

        console.log(datehelper + "-------" + datekeeper);

        this.fuel = this.getFuelTypes(vessel, datehelper, datekeeper, "Hour");
        datehelper = datekeeper;

        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [0];
          Summ = Summ.toFixed(2);
          if (i == 2) {
            data1.push(Summ);
          }
          if (i == 3) {
            data2.push(Summ);
          }
          if (i == 4) {
            data3.push(Summ);
          }
          if (i == 5) {
            data4.push(Summ);
          }
          if (i == 6) {
            data5.push(Summ);
          }
          if (i == 7) {
            data6.push(Summ);
          }
          if (i == 8) {
            data7.push(Summ);
          }
          if (i == 9) {
            data8.push(Summ);
          }
          if (i == 10) {
            data9.push(Summ);
          }
          if (i == 11) {
            data10.push(Summ);
          }
          Summ = 0;
        }
      }
    }
    let counter;
    let hjelpeslicer1;
    let hjelpeslicer2;

    if (timeframe == "Days") {

      labels = days;
      datehelper = fromDate;
      this.fuel = this.getFuelTypes(vessel, fromDate, toDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }
      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
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

    if (elementer.length > 4) {
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
              label: names[1],
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
