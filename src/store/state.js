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
  fetchedVessels: false,

  // General date times
  dateToday: "",
  dateYesterday:"",
  // DateTime Component states
  fromDate: "2019-04-04T00:00:00",
  toDate: "2019-04-15T00:00:00",

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
        // --- Default --- //

        gps: {
          id: 9177,
          name: "Ship Speed GPS"
        },
        log: {
          id: 9178,
          name: "Ship Speed Log"
        },

        // --- Additional fuel types --- //

        boilerfuel: {
          id: 9024,
          name: "Blr Fuel Mass"
        },
        boilerhfo: {
          id: 9031,
          name: "Blr HFO Mass"
        },
        boilerlshfo: {
          id: 9033,
          name: "Blr LSHFO Mass"
        },
        boilermdo: {
          id: 9034,
          name: "Blr MDO Mass"
        },
        boilermgo: {
          id: 9035,
          name: "Blr MGO Mass"
        },
        ge12hfo: {
          id: 9080,
          name: "GE 1+2 HFO Mass"
        },
        ge12iso: {
          id: 9081,
          name: "GE 1+2 ISO Eq MDO"
        },
        ge12lshfo: {
          id: 9082,
          name: "GE 1+2 LSHFO Mass"
        },
        ge12mdo: {
          id: 9083,
          name: "GE 1+2 MDO Mass"
        },
        ge12mgo: {
          id: 9084,
          name: "GE 1+2 MGO Mass"
        },
        ge12pilot: {
          id: 9085,
          name: "GE 1+2 Pilot Fuel"
        },
        ge34fuel: {
          id: 9109,
          name: "GE 3+4 Fuel Mass"
        },
        ge34temp: {
          id: 9112,
          name: "GE 3+4 Fuel Temp"
        },
        ge34hfo: {
          id: 9114,
          name: "GE 3+4 HFO Mass"
        },
        ge34iso: {
          id: 9115,
          name: "GE 3+4 ISO Eq MDO"
        },
        ge34lshfo: {
          id: 9116,
          name: "GE 3+4 LSHFO Mass"
        },
        ge34mdo: {
          id: 9117,
          name: "GE 3+4 MDO Mass"
        },
        ge34mgo: {
          id: 9118,
          name: "GE 3+4 MGO Mass"
        },
        ge34pilot: {
          id: 9119,
          name: "GE 3+4 Pilot Fuel"
        },

        // --- Total --- //

        totalfo: {
          id: 9139,
          name: "GE Tot FO Mass"
        },
        totalgas: {
          id: 9140,
          name: "GE Tot Gas Mass"
        },
        totalhfo: {
          id: 9141,
          name: "GE Tot HFO Mass"
        },
        totaliso: {
          id: 9142,
          name: "GE Tot ISO Eq MDO"
        },
        totallshfo: {
          id: 9143,
          name: "GE Tot LSHFO Mass"
        },
        totalmdo: {
          id: 9144,
          name: "GE Tot MDO Mass"
        },
        totalmgo: {
          id: 9145,
          name: "GE Tot MGO Mass"
        },
        totalpilot: {
          id: 9146,
          name: "GE Tot Pilot Fuel"
        },

        // --- Default --- //

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
        // --- Additional Fuel Types --- //
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
        },
        // --- Additional Fuel Variables --- //
        boilerhfo: {
          id: 42563,
          name: "Blr HFO Mass"
        },
        boilerlsmgo: {
          id: 42564,
          name: "Blr LSMGO Mass"
        }
      }
    }
  ]
};
