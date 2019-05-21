export default {
  /**
   * Returns predefined objects of state data.
   * Different granularities are accessible through "getSpeed.gps.dayData"
   */
  getSpeed: state => vesselid => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        return {
          gps: vessel.logVariables.find(x => x.id === 9177),
          log: vessel.logVariables.find(x => x.id === 9178)
        };
      case 121:
        return {
          gps: vessel.logVariables.find(x => x.id === 10481),
          log: vessel.logVariables.find(x => x.id === 10482)
        };
      case 133:
        return {
          gps: vessel.logVariables.find(x => x.id === 12191),
          log: vessel.logVariables.find(x => x.id === 12192)
        };
      case 123:
        return {
          gps: vessel.logVariables.find(x => x.id === 10803),
          log: vessel.logVariables.find(x => x.id === 10804)
        };
      default:
        return "No matching vessel id";
    }
  },
  getFuel: state => vesselid => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        return {
          boilerfuel: vessel.logVariables.find(x => x.id === 9024),
          gcu: vessel.logVariables.find(x => x.id === 9060),
          ge1: vessel.logVariables.find(x => x.id === 9064),
          ge2: vessel.logVariables.find(x => x.id === 9088),
          ge3: vessel.logVariables.find(x => x.id === 9098),
          ge4: vessel.logVariables.find(x => x.id === 9122)
        };
      case 121:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 10391),
          boilergas: vessel.logVariables.find(x => x.id === 10396)
        };
      case 123:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 10700),
          boilergas: vessel.logVariables.find(x => x.id === 10705)
        };
      case 133:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 12101),
          boilergas: vessel.logVariables.find(x => x.id === 12106)
        };
      default:
        return "No matching vessel id";
    }
  },
  getEmission: state => vesselid => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        return {
          C02: vessel.logVariables.find(x => x.id === 9049),
          S02: vessel.logVariables.find(x => x.id === 9051)
        };
      case 121:
        return {
          C02: vessel.logVariables.find(x => x.id === 10415),
          S02: vessel.logVariables.find(x => x.id === 10417)
        };
      case 123:
        return {
          C02: vessel.logVariables.find(x => x.id === 10730),
          S02: vessel.logVariables.find(x => x.id === 10732)
        };
      case 133:
        return {
          C02: vessel.logVariables.find(x => x.id === 12125),
          S02: vessel.logVariables.find(x => x.id === 12127)
        };
      default:
        return "No matching vessel id";
    }
  },
  getSpeedDay: (state) => (vesselid, from, to) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    let f = -1;
    let t = -1;
    switch (vesselid) {
      case 110:
        {
          let gpsArray = vessel.logVariables.find(x => x.id === 9177);
          let logArray = vessel.logVariables.find(x => x.id === 9178);
          let start = false;
          let gpsData = {};
          let logData = {};
          for (let key in gpsArray.dayData) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if(start) {
              gpsData[key] = gpsArray.dayData[key];
              logData[key] = logArray.dayData[key];
            }
          }
          return {
            gps: {
              id: gpsArray.id,
              name: gpsArray.name,
              unit: gpsArray.unit,
              data: gpsData
            },
            log: {
              id: logArray.id,
              name: logArray.name,
              unit: logArray.unit,
              data: logData
            }
          }
        };
      case 121:
        {
          let gpsArray = vessel.logVariables.find(x => x.id === 10481);
          let logArray = vessel.logVariables.find(x => x.id === 10482);
          let start = false;
          let gpsData = {};
          let logData = {};
          for (let key in gpsArray.dayData) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if(start) {
              gpsData[key] = gpsArray.dayData[key];
              logData[key] = logArray.dayData[key];
            }
          }
          return {
            gps: {
              id: gpsArray.id,
              name: gpsArray.name,
              unit: gpsArray.unit,
              data: gpsData
            },
            log: {
              id: logArray.id,
              name: logArray.name,
              unit: logArray.unit,
              data: logData
            }
          }
        };
      case 133:
        {
          let gpsArray = vessel.logVariables.find(x => x.id === 12191);
          let logArray = vessel.logVariables.find(x => x.id === 12192);
          let start = false;
          let gpsData = {};
          let logData = {};
          for (let key in gpsArray.dayData) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if(start) {
              gpsData[key] = gpsArray.dayData[key];
              logData[key] = logArray.dayData[key];
            }
          }
          return {
            gps: {
              id: gpsArray.id,
              name: gpsArray.name,
              unit: gpsArray.unit,
              data: gpsData
            },
            log: {
              id: logArray.id,
              name: logArray.name,
              unit: logArray.unit,
              data: logData
            }
          }
        };
      case 123:
        {
          gpsArray = vessel.logVariables.find(x => x.id === 10803);
          logArray = vessel.logVariables.find(x => x.id === 10804);
          let start = false;
          let gpsData = {};
          let logData = {};
          for (let key in gpsArray.dayData) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if(start) {
              gpsData[key] = gpsArray.dayData[key];
              logData[key] = logArray.dayData[key];
            }
          }
          return {
            gps: {
              id: gpsArray.id,
              name: gpsArray.name,
              unit: gpsArray.unit,
              data: gpsData
            },
            log: {
              id: logArray.id,
              name: logArray.name,
              unit: logArray.unit,
              data: logData
            }
          }
        };
      default:
        return "No matching vessel id";
    }

  }
};
