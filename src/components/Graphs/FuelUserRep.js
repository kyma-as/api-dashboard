import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";
import { parse } from "terser";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["getFuel"])
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
    selectedMonth: String
  },
  mounted() {
    let vessel = parseInt(this.selectedVessels);
    let timeframe = this.selectedTimeFrame;
    let year = this.selectedYear;
    let month = this.selectedMonth;
    let Nyear = parseInt(year) + 1;
    let nMonth;
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
    let numberMonth;
    for (let i = 0; i < months.length; i++) {
      if (month == months[i]) {
        numberMonth = i + 1;
        nMonth = i + 2;
      }
    }
    if (numberMonth < 10) {
      numberMonth = "0" + numberMonth;
    }
    if (nMonth < 10) {
      nMonth = "0" + nMonth;
    }

    let fromDate = year + "-" + numberMonth + "-01T00:00:00";
    let toDate = year + "-" + nMonth + "-01T00:00:00";

    let yFromDate = year + "-01-01T00:00:00";
    let yToDate = Nyear + "-01-01T00:00:00";

    let yakse = "kg";
    let labels = [];
    let names = [];
    let elementer = [];
    let i = 0;
    let arrayer = [];
    let harrayer = [];
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
    arrayer = [
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
      data10,
      data11,
      data12
    ];
    harrayer = [hdata1, hdata2, hdata3, hdata4];
    for (i = 1; i < 32; i++) {
      if (i < 10) {
        days.push("0" + i);
      }
      if (i > 9) {
        days.push(i);
      }
      if (month == "February" && i == 28 && !(year == "2016")) {
        break;
      }
      if (month == "February" && year == "2016" && i == 29) {
        break;
      }
      if (
        (month == "April" ||
          month == "June" ||
          month == "September" ||
          month == "November") &&
        i == 30
      ) {
        break;
      }
    }

    if (timeframe == "Quarters") {
      labels = ["Q1", "Q2", "Q3", "Q4"];

      datehelper = yFromDate;
      this.fuel = this.getFuel(vessel, yFromDate, yToDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }

      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
      }
      let k = 0;
      for (i = 1; i < labels.length + 1; i++) {
        if (i == 1) {
          k = 4;
        }
        if (i == 2) {
          k = 7;
        }
        if (i == 3) {
          k = 10;
        }
        datekeeper =
          yFromDate.substring(0, 5) + "0" + k + yFromDate.substring(7);
        if (i == 3) {
          datekeeper = yFromDate.substring(0, 5) + k + yFromDate.substring(7);
        }
        if (i == 4) {
          datekeeper = yToDate = Nyear + "-01-01T00:00:00";
        }
        this.fuel = this.getFuel(vessel, datehelper, datekeeper, "Hour");
        datehelper = datekeeper;

        let counter = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [];
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
        }
      }
    }

    if (timeframe == "Months") {
      labels = months;
      datehelper = yFromDate;
      this.fuel = this.getFuel(vessel, yFromDate, yToDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }

      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
      }

      for (i = 2; i < labels.length + 1; i++) {
        datekeeper =
          yFromDate.substring(0, 5) + "0" + i + yFromDate.substring(7);
        if (i > 9) {
          datekeeper = yFromDate.substring(0, 5) + i + yFromDate.substring(7);
        }

        // console.log(datehelper + "-------" + datekeeper);

        this.fuel = this.getFuel(vessel, datehelper, datekeeper, "Hour");
        datehelper = datekeeper;

        let counter = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [];
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
        }
      }
      //Last month so goes from 2018 to 2019 is the values for december, edgecase
      this.fuel = this.getFuel(vessel, datehelper, yToDate, "Hour");
      let j = 0;
      for (let key in this.fuel) {
        for (let key2 in this.fuel[key].data) {
          array.push(this.fuel[key].data[key2]);
        }
        Summ = array.reduce((prev, cur) => prev + cur, 0);
        array = [];
        Summ = Summ.toFixed(2);

        arrayer[j].push(Summ);
        Summ = 0;
        j++;
      }
    }

    if (timeframe == "Days") {
      labels = days;
      datehelper = fromDate;
      this.fuel = this.getFuel(vessel, fromDate, toDate, "Hour");
      for (let p = 0; p < Object.keys(this.fuel).length; p++) {
        elementer.push(Object.keys(this.fuel)[i]);
      }

      for (let f in this.fuel) {
        names.push(this.fuel[f].name);
      }

      for (i = 2; i < labels.length + 1; i++) {
        datekeeper =
          fromDate.substring(0, 8) + "0" + i + fromDate.substring(10);
        if (i > 9) {
          datekeeper = fromDate.substring(0, 8) + i + fromDate.substring(10);
        }

        // console.log(datehelper + "-------" + datekeeper);

        this.fuel = this.getFuel(vessel, datehelper, datekeeper, "Hour");
        datehelper = datekeeper;

        let counter = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [];
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
        }
      }
      if (numberMonth == 12) {
        //Last day so goes to a new year, edgecase
        this.fuel = this.getFuel(vessel, datehelper, yToDate, "Hour");
        let j = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [];
          Summ = Summ.toFixed(2);
          arrayer[j].push(Summ);
          Summ = 0;
          j++;
        }
      } else {
        //Last day so goes to a new month, edgecase
        this.fuel = this.getFuel(vessel, datehelper, toDate, "Hour");
        let j = 0;
        for (let key in this.fuel) {
          for (let key2 in this.fuel[key].data) {
            array.push(this.fuel[key].data[key2]);
          }
          Summ = array.reduce((prev, cur) => prev + cur, 0);
          array = [];
          Summ = Summ.toFixed(2);
          arrayer[j].push(Summ);
          Summ = 0;
          j++;
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
              data: arrayer[0]
            },
            {
              label: names[1],
              backgroundColor: "maroon",
              data: arrayer[1]
            },
            {
              label: names[2],
              backgroundColor: "green",
              data: arrayer[2]
            },
            {
              label: names[3],
              backgroundColor: "yellow",
              data: arrayer[3]
            },
            {
              label: names[4],
              backgroundColor: "orange",
              data: arrayer[4]
            },
            {
              label: names[5],
              backgroundColor: "purple",
              data: arrayer[5]
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
              data: arrayer[0]
            },
            {
              label: names[1],
              backgroundColor: "maroon",
              data: arrayer[1]
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
              data: arrayer[0]
            },
            {
              label: names[1],
              backgroundColor: "maroon",
              data: arrayer[1]
            },
            {
              label: names[2],
              backgroundColor: "green",
              data: arrayer[2]
            },
            {
              label: names[3],
              backgroundColor: "yellow",
              data: arrayer[3]
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
