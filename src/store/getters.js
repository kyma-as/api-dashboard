export default {
  /**
   * Returns predefined objects of state data.
   * Different granularities are accessible through "getSpeed.gps.dayData"
   */
  // getSpeed: state => vesselid => {
  //   const vessel = state.vessels.find(vessel => vessel.id === vesselid);
  //   switch (vesselid) {
  //     case 110:
  //       return {
  //         gps: vessel.logVariables.find(x => x.id === 9177),
  //         log: vessel.logVariables.find(x => x.id === 9178)
  //       };
  //     case 121:
  //       return {
  //         gps: vessel.logVariables.find(x => x.id === 10481),
  //         log: vessel.logVariables.find(x => x.id === 10482)
  //       };
  //     case 133:
  //       return {
  //         gps: vessel.logVariables.find(x => x.id === 12191),
  //         log: vessel.logVariables.find(x => x.id === 12192)
  //       };
  //     case 123:
  //       return {
  //         gps: vessel.logVariables.find(x => x.id === 10803),
  //         log: vessel.logVariables.find(x => x.id === 10804)
  //       };
  //     default:
  //       return "No matching vessel id";
  //   }
  // },


  // getFuel: state => vesselid => {
  //   const vessel = state.vessels.find(vessel => vessel.id === vesselid);
  //   switch (vesselid) {
  //     case 110:
  //       return {
  //         boilerfuel: vessel.logVariables.find(x => x.id === 9024),
  //         gcu: vessel.logVariables.find(x => x.id === 9060),
  //         ge1: vessel.logVariables.find(x => x.id === 9064),
  //         ge2: vessel.logVariables.find(x => x.id === 9088),
  //         ge3: vessel.logVariables.find(x => x.id === 9098),
  //         ge4: vessel.logVariables.find(x => x.id === 9122)
  //       };
  //     case 121:
  //       return {
  //         boilerfo: vessel.logVariables.find(x => x.id === 10391),
  //         boilergas: vessel.logVariables.find(x => x.id === 10396)
  //       };
  //     case 123:
  //       return {
  //         boilerfo: vessel.logVariables.find(x => x.id === 10700),
  //         boilergas: vessel.logVariables.find(x => x.id === 10705)
  //       };
  //     case 133:
  //       return {
  //         boilerfo: vessel.logVariables.find(x => x.id === 12101),
  //         boilergas: vessel.logVariables.find(x => x.id === 12106)
  //       };
  //     default:
  //       return "No matching vessel id";
  //   }
  // },
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
  getEmission: (state) => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        {
          let co2Array = vessel.logVariables.find(x => x.id === 9049);
          let so2Array = vessel.logVariables.find(x => x.id === 9051);
          let start = false;

          let co2Data = {};
          let so2Data = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = co2Array.dayData;
              break;
            case state.granularities.hour:
              keyArray = co2Array.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = co2Array.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  co2Data[key] = co2Array.dayData[key];
                  so2Data[key] = so2Array.dayData[key];
                  break;
                case state.granularities.hour:
                  co2Data[key] = co2Array.hourData[key];
                  so2Data[key] = so2Array.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  co2Data[key] = co2Array.quarterhourData[key];
                  so2Data[key] = so2Array.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            co2: {
              id: co2Array.id,
              name: co2Array.name,
              unit: co2Array.unit,
              data: co2Data
            },
            so2: {
              id: so2Array.id,
              name: so2Array.name,
              unit: so2Array.unit,
              data: so2Data
            }
          };
        }
      case 121:
        {
          let co2Array = vessel.logVariables.find(x => x.id === 10415);
          let so2Array = vessel.logVariables.find(x => x.id === 10417);
          let start = false;

          let co2Data = {};
          let so2Data = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = co2Array.dayData;
              break;
            case state.granularities.hour:
              keyArray = co2Array.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = co2Array.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  co2Data[key] = co2Array.dayData[key];
                  so2Data[key] = so2Array.dayData[key];
                  break;
                case state.granularities.hour:
                  co2Data[key] = co2Array.hourData[key];
                  so2Data[key] = so2Array.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  co2Data[key] = co2Array.quarterhourData[key];
                  so2Data[key] = so2Array.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            co2: {
              id: co2Array.id,
              name: co2Array.name,
              unit: co2Array.unit,
              data: co2Data
            },
            so2: {
              id: so2Array.id,
              name: so2Array.name,
              unit: so2Array.unit,
              data: so2Data
            }
          };
        }
      case 133:
        {
          let co2Array = vessel.logVariables.find(x => x.id === 12125);
          let so2Array = vessel.logVariables.find(x => x.id === 12127);
          let start = false;

          let co2Data = {};
          let so2Data = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = co2Array.dayData;
              break;
            case state.granularities.hour:
              keyArray = co2Array.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = co2Array.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  co2Data[key] = co2Array.dayData[key];
                  so2Data[key] = so2Array.dayData[key];
                  break;
                case state.granularities.hour:
                  co2Data[key] = co2Array.hourData[key];
                  so2Data[key] = so2Array.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  co2Data[key] = co2Array.quarterhourData[key];
                  so2Data[key] = so2Array.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            co2: {
              id: co2Array.id,
              name: co2Array.name,
              unit: co2Array.unit,
              data: co2Data
            },
            so2: {
              id: so2Array.id,
              name: so2Array.name,
              unit: so2Array.unit,
              data: so2Data
            }
          };
        }
      case 123:
        {
          let co2Array = vessel.logVariables.find(x => x.id === 10730);
          let so2Array = vessel.logVariables.find(x => x.id === 10732);
          let start = false;

          let co2Data = {};
          let so2Data = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = co2Array.dayData;
              break;
            case state.granularities.hour:
              keyArray = co2Array.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = co2Array.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  co2Data[key] = co2Array.dayData[key];
                  so2Data[key] = so2Array.dayData[key];
                  break;
                case state.granularities.hour:
                  co2Data[key] = co2Array.hourData[key];
                  so2Data[key] = so2Array.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  co2Data[key] = co2Array.quarterhourData[key];
                  so2Data[key] = so2Array.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            co2: {
              id: co2Array.id,
              name: co2Array.name,
              unit: co2Array.unit,
              data: co2Data
            },
            so2: {
              id: so2Array.id,
              name: so2Array.name,
              unit: so2Array.unit,
              data: so2Data
            }
          };
        }


    }
  },
  getSpeed: (state) => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        {
          let gpsArray = vessel.logVariables.find(x => x.id === 9177);
          let logArray = vessel.logVariables.find(x => x.id === 9178);
          let start = false;
          let gpsData = {};
          let logData = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = gpsArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = gpsArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = gpsArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  gpsData[key] = gpsArray.dayData[key];
                  logData[key] = logArray.dayData[key];
                  break;
                case state.granularities.hour:
                  gpsData[key] = gpsArray.hourData[key];
                  logData[key] = logArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  gpsData[key] = gpsArray.quarterhourData[key];
                  logData[key] = logArray.quarterhourData[key];
                  break;
              }
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

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = gpsArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = gpsArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = gpsArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  gpsData[key] = gpsArray.dayData[key];
                  logData[key] = logArray.dayData[key];
                  break;
                case state.granularities.hour:
                  gpsData[key] = gpsArray.hourData[key];
                  logData[key] = logArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  gpsData[key] = gpsArray.quarterhourData[key];
                  logData[key] = logArray.quarterhourData[key];
                  break;
              }
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

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = gpsArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = gpsArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = gpsArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  gpsData[key] = gpsArray.dayData[key];
                  logData[key] = logArray.dayData[key];
                  break;
                case state.granularities.hour:
                  gpsData[key] = gpsArray.hourData[key];
                  logData[key] = logArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  gpsData[key] = gpsArray.quarterhourData[key];
                  logData[key] = logArray.quarterhourData[key];
                  break;
              }
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

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = gpsArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = gpsArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = gpsArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  gpsData[key] = gpsArray.dayData[key];
                  logData[key] = logArray.dayData[key];
                  break;
                case state.granularities.hour:
                  gpsData[key] = gpsArray.hourData[key];
                  logData[key] = logArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  gpsData[key] = gpsArray.quarterhourData[key];
                  logData[key] = logArray.quarterhourData[key];
                  break;
              }
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

  },
  getFuel: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        {
          let boilerfuelArray = vessel.logVariables.find(x => x.id === 9024);
          let gcuArray = vessel.logVariables.find(x => x.id === 9060);
          let ge1Array = vessel.logVariables.find(x => x.id === 9064);
          let ge2Array = vessel.logVariables.find(x => x.id === 9088);
          let ge3Array = vessel.logVariables.find(x => x.id === 9098);
          let ge4Array = vessel.logVariables.find(x => x.id === 9122);
          let start = false;

          let boilerfuelData = {};
          let gcuData = {};
          let ge1Data = {};
          let ge2Data = {};
          let ge3Data = {};
          let ge4Data = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = gcuArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = gcuArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = gcuArray.quarterhourData;
              break;
          }

          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  boilerfuelData[key] = boilerfuelArray.dayData[key];
                  gcuData[key] = gcuArray.dayData[key];
                  ge1Data[key] = ge1Array.dayData[key];
                  ge2Data[key] = ge2Array.dayData[key];
                  ge3Data[key] = ge3Array.dayData[key];
                  ge4Data[key] = ge4Array.dayData[key];
                  break;
                case state.granularities.hour:
                  boilerfuelData[key] = boilerfuelArray.hourData[key];
                  gcuData[key] = gcuArray.hourData[key];
                  ge1Data[key] = ge1Array.hourData[key];
                  ge2Data[key] = ge2Array.hourData[key];
                  ge3Data[key] = ge3Array.hourData[key];
                  ge4Data[key] = ge4Array.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  boilerfuelData[key] = boilerfuelArray.quarterhourData[key];
                  gcuData[key] = gcuArray.quarterhourData[key];
                  ge1Data[key] = ge1Array.quarterhourData[key];
                  ge2Data[key] = ge2Array.quarterhourData[key];
                  ge3Data[key] = ge3Array.quarterhourData[key];
                  ge4Data[key] = ge4Array.quarterhourData[key];
                  break;
              }
            }
          }

          return {
            boilerfuel: {
              id: boilerfuelArray.id,
              name: boilerfuelArray.name,
              unit: boilerfuelArray.unit,
              data: boilerfuelData
            },
            gcu: {
              id: gcuArray.id,
              name: gcuArray.name,
              unit: gcuArray.unit,
              data: gcuData
            },
            ge1: {
              id: ge1Array.id,
              name: ge1Array.name,
              unit: ge1Array.unit,
              data: ge1Data
            },
            ge2: {
              id: ge2Array.id,
              name: ge2Array.name,
              unit: ge2Array.unit,
              data: ge2Data
            },
            ge3: {
              id: ge3Array.id,
              name: ge3Array.name,
              unit: ge3Array.unit,
              data: ge3Data
            },
            ge4: {
              id: ge4Array.id,
              name: ge4Array.name,
              unit: ge4Array.unit,
              data: ge4Data
            }
          };
        }
      case 121:
        {
          let boilerfoArray = vessel.logVariables.find(x => x.id === 10391);
          let boilergasArray = vessel.logVariables.find(x => x.id === 10396);
          let start = false;

          let boilerfoData = {};
          let boilergasData = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = boilerfoArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = boilerfoArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = boilerfoArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  boilerfoData[key] = boilerfoArray.dayData[key];
                  boilergasData[key] = boilergasArray.dayData[key];
                  break;
                case state.granularities.hour:
                  boilerfoData[key] = boilerfoArray.hourData[key];
                  boilergasData[key] = boilergasArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  boilerfoData[key] = boilerfoArray.quarterhourData[key];
                  boilergasData[key] = boilergasArray.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            boilerfo: {
              id: boilerfoArray.id,
              name: boilerfoArray.name,
              unit: boilerfoArray.unit,
              data: boilerfoData
            },
            boilergas: {
              id: boilergasArray.id,
              name: boilergasArray.name,
              unit: boilergasArray.unit,
              data: boilergasData
            }
          };
        }
      case 123:
        {
          let boilerfoArray = vessel.logVariables.find(x => x.id === 10700);
          let boilergasArray = vessel.logVariables.find(x => x.id === 10705);
          let start = false;

          let boilerfoData = {};
          let boilergasData = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = boilerfoArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = boilerfoArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = boilerfoArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  boilerfoData[key] = boilerfoArray.dayData[key];
                  boilergasData[key] = boilergasArray.dayData[key];
                  break;
                case state.granularities.hour:
                  boilerfoData[key] = boilerfoArray.hourData[key];
                  boilergasData[key] = boilergasArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  boilerfoData[key] = boilerfoArray.quarterhourData[key];
                  boilergasData[key] = boilergasArray.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            boilerfo: {
              id: boilerfoArray.id,
              name: boilerfoArray.name,
              unit: boilerfoArray.unit,
              data: boilerfoData
            },
            boilergas: {
              id: boilergasArray.id,
              name: boilergasArray.name,
              unit: boilergasArray.unit,
              data: boilergasData
            }
          };
        }
      case 133:
        {
          let boilerfoArray = vessel.logVariables.find(x => x.id === 12101);
          let boilergasArray = vessel.logVariables.find(x => x.id === 12106);
          let start = false;

          let boilerfoData = {};
          let boilergasData = {};

          let keyArray;
          switch (gran) {
            case state.granularities.day:
              keyArray = boilerfoArray.dayData;
              break;
            case state.granularities.hour:
              keyArray = boilerfoArray.hourData;
              break;
            case state.granularities.quarterhour:
              keyArray = boilerfoArray.quarterhourData;
              break;
          }
          for (let key in keyArray) {
            if (key == from) {
              start = true;
            }
            if (key == to) {
              start = false;
            }
            if (start) {
              switch (gran) {
                case state.granularities.day:
                  boilerfoData[key] = boilerfoArray.dayData[key];
                  boilergasData[key] = boilergasArray.dayData[key];
                  break;
                case state.granularities.hour:
                  boilerfoData[key] = boilerfoArray.hourData[key];
                  boilergasData[key] = boilergasArray.hourData[key];
                  break;
                case state.granularities.quarterhour:
                  boilerfoData[key] = boilerfoArray.quarterhourData[key];
                  boilergasData[key] = boilergasArray.quarterhourData[key];
                  break;
              }
            }
          }
          return {
            boilerfo: {
              id: boilerfoArray.id,
              name: boilerfoArray.name,
              unit: boilerfoArray.unit,
              data: boilerfoData
            },
            boilergas: {
              id: boilergasArray.id,
              name: boilergasArray.name,
              unit: boilergasArray.unit,
              data: boilergasData
            }
          };
        }
      default:
        return "No matching vessel id";
    }
  }
};
