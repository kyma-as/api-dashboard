/**
 * Default state of application - containing the data that can
 * be pulled into any component.
 */
export default {
  /**
   * Initially, the application fetches and stores the following in state:
   *  - Fuel variables (Daily/Hourly) for 3 years
   *  - Fuel variables (Quarterhourly) for 2 weeks
   *  - Speed variables (Daily/Hourly) for 3 years
   *  - Speed variables (Quarterhourly) for 2 weeks
   *  - Emission variables (Daily/Hourly) for 3 years
   *  - Emission variables (Quarterhourly) for 2 weeks
   *
   */
  vessels: [],
  apiCallCount: 0,
  header: {},
  url: "https://demo.kyma.no/api/v1/",
  dateToday: "",
  fetchedVessels: false,

  loggedIn: false,

  // TODO: Replace this list as a loadable json file
  granularities: {
    day: "Day",
    hour: "Hour",
    quarterhour: "QuarterHour"
  },

  default_vars: [
    {
      id: 110,
      variables: {
        gps: {
          id: 9177,
          name: "Ship Speed GPS"
        },
        log: {
          id: 9178,
          name: "Ship Speed Log"
        },
        boilerfuel: {
          id: 9024,
          name: "Blr Fuel Mass"
        },
        gcu: {
          id: 9060,
          name: "GCU Gas Mass"
        },
        ge1: {
          id: 9064,
          name: "GE 1 Gas Mass"
        },
        ge2: {
          id: 9088,
          name: "GE 2 Gas Mass"
        },
        ge3: {
          id: 9098,
          name: "GE 3 Gas Mass"
        },
        ge4: {
          id: 9122,
          name: "GE 4 Gas Mass"
        },
        co2: {
          id: 9049,
          name: "Emissions CO2"
        },
        so2: {
          id: 9051,
          name: "Emissions SO2"
        }
      }
    },
    {
      id: 121,
      variables: {
        gps: {
          id: 10481,
          name: "Ship Speed GPS"
        },
        log: {
          id: 10482,
          name: "Ship Speed Log"
        },
        boilerfo: {
          id: 10391,
          name: "Boilers F.O. Mass"
        },
        boilergas: {
          id: 10396,
          name: "Boilers Gas Mass"
        },
        co2: {
          id: 10415,
          name: "Emissions CO2"
        },
        so2: {
          id: 10417,
          name: "Emissions SO2"
        }
      }
    },
    {
      id: 133,
      variables: {
        gps: {
          id: 12191,
          name: "Ship Speed GPS"
        },
        log: {
          id: 12192,
          name: "Ship Speed Log"
        },
        boilerfo: {
          id: 12101,
          name: "Boilers F.O. Mass"
        },
        boilergas: {
          id: 12106,
          name: "Boilers Gas Mass"
        },
        co2: {
          id: 12125,
          name: "Emissions CO2"
        },
        so2: {
          id: 12127,
          name: "Emissions SO2"
        }
      }
    },
    {
      id: 123,
      variables: {
        gps: {
          id: 10803,
          name: "Ship Speed GPS"
        },
        log: {
          id: 10804,
          name: "Ship Speed Log"
        },
        boilerfo: {
          id: 10700,
          name: "Boilers F.O. Mass"
        },
        boilergas: {
          id: 10705,
          name: "Boilers Gas Mass"
        },
        co2: {
          id: 10730,
          name: "Emissions CO2"
        },
        so2: {
          id: 10732,
          name: "Emissions SO2"
        }
      }
    }
  ]
};
