export default {
  /**
   * Returns predefined objects of state data.
   * Different granularities are accessible through "getSpeed.gps.dayData"
   */

  getEmission: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110: {
        let co2Array = vessel.logVariables.find(x => x.id === 9049);
        let so2Array = vessel.logVariables.find(x => x.id === 9051);

        let keyArray = arrayOfKeys(state, gran, co2Array);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          co2Array,
          so2Array
        ]);

        let co2Data = dataArray[0];
        let so2Data = dataArray[1];

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
      case 121: {
        let co2Array = vessel.logVariables.find(x => x.id === 10415);
        let so2Array = vessel.logVariables.find(x => x.id === 10417);

        let keyArray = arrayOfKeys(state, gran, co2Array);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          co2Array,
          so2Array
        ]);

        let co2Data = dataArray[0];
        let so2Data = dataArray[1];

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
      case 133: {
        let co2Array = vessel.logVariables.find(x => x.id === 12125);
        let so2Array = vessel.logVariables.find(x => x.id === 12127);

        let keyArray = arrayOfKeys(state, gran, co2Array);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          co2Array,
          so2Array
        ]);

        let co2Data = dataArray[0];
        let so2Data = dataArray[1];

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
      case 123: {
        let co2Array = vessel.logVariables.find(x => x.id === 10730);
        let so2Array = vessel.logVariables.find(x => x.id === 10732);

        let keyArray = arrayOfKeys(state, gran, co2Array);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          co2Array,
          so2Array
        ]);

        let co2Data = dataArray[0];
        let so2Data = dataArray[1];

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
  getSpeed: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110: {
        let gpsArray = vessel.logVariables.find(x => x.id === 9177);
        let logArray = vessel.logVariables.find(x => x.id === 9178);

        let keyArray = arrayOfKeys(state, gran, gpsArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          gpsArray,
          logArray
        ]);

        let gpsData = dataArray[0];
        let logData = dataArray[1];

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
        };
      }
      case 121: {
        let gpsArray = vessel.logVariables.find(x => x.id === 10481);
        let logArray = vessel.logVariables.find(x => x.id === 10482);

        let keyArray = arrayOfKeys(state, gran, gpsArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          gpsArray,
          logArray
        ]);

        let gpsData = dataArray[0];
        let logData = dataArray[1];

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
        };
      }
      case 133: {
        let gpsArray = vessel.logVariables.find(x => x.id === 12191);
        let logArray = vessel.logVariables.find(x => x.id === 12192);

        let keyArray = arrayOfKeys(state, gran, gpsArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          gpsArray,
          logArray
        ]);

        let gpsData = dataArray[0];
        let logData = dataArray[1];

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
        };
      }
      case 123: {
        let gpsArray = vessel.logVariables.find(x => x.id === 10803);
        let logArray = vessel.logVariables.find(x => x.id === 10804);

        let keyArray = arrayOfKeys(state, gran, gpsArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          gpsArray,
          logArray
        ]);

        let gpsData = dataArray[0];
        let logData = dataArray[1];

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
        };
      }
      default:
        return "No matching vessel id";
    }
  },
  getFuelTypes: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110: {
        let boilerhfoArray = vessel.logVariables.find(x => x.id === 9031);
        let boilerlshfoArray = vessel.logVariables.find(x => x.id === 9033);
        let boilermdoArray = vessel.logVariables.find(x => x.id === 9034);
        let boilermgoArray = vessel.logVariables.find(x => x.id === 9035);
        let totalfoArray = vessel.logVariables.find(x => x.id === 9139);
        let totalgasArray = vessel.logVariables.find(x => x.id === 9140);
        let totalhfoArray = vessel.logVariables.find(x => x.id === 9141);
        let totalisoArray = vessel.logVariables.find(x => x.id === 9142);
        let totallshfoArray = vessel.logVariables.find(x => x.id === 9143);
        let totalmdoArray = vessel.logVariables.find(x => x.id === 9144);
        let totalmgoArray = vessel.logVariables.find(x => x.id === 9145);
        let totalpilotArray = vessel.logVariables.find(x => x.id === 9146);

        let keyArray = arrayOfKeys(state, gran, boilerhfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerhfoArray,
          boilerlshfoArray,
          boilermdoArray,
          boilermgoArray,
          totalfoArray,
          totalgasArray,
          totalhfoArray,
          totalisoArray,
          totallshfoArray,
          totalmdoArray,
          totalmgoArray,
          totalpilotArray
        ]);

        let boilerhfoData = dataArray[0];
        let boilerlshfoData = dataArray[1];
        let boilermdoData = dataArray[2];
        let boilermgoData = dataArray[3];
        let totalfoData = dataArray[4];
        let totalgasData = dataArray[5];
        let totalhfoData = dataArray[6];
        let totalisoData = dataArray[7];
        let totallshfoData = dataArray[8];
        let totalmdoData = dataArray[9];
        let totalmgoData = dataArray[10];
        let totalpilotData = dataArray[11];

        return {
          boilerhfo: {
            id: boilerhfoArray.id,
            name: boilerhfoArray.name,
            unit: boilerhfoArray.unit,
            data: boilerhfoData
          },
          boilerlshfo: {
            id: boilerlshfoArray.id,
            name: boilerlshfoArray.name,
            unit: boilerlshfoArray.unit,
            data: boilerlshfoData
          },
          boilermdo: {
            id: boilermdoArray.id,
            name: boilermdoArray.name,
            unit: boilermdoArray.unit,
            data: boilermdoData
          },
          boilermgo: {
            id: boilermgoArray.id,
            name: boilermgoArray.name,
            unit: boilermgoArray.unit,
            data: boilermgoData
          },
          totalfo: {
            id: totalfoArray.id,
            name: totalfoArray.name,
            unit: totalfoArray.unit,
            data: totalfoData
          },
          totalgas: {
            id: totalgasArray.id,
            name: totalgasArray.name,
            unit: totalgasArray.unit,
            data: totalgasData
          },
          totalhfo: {
            id: totalhfoArray.id,
            name: totalhfoArray.name,
            unit: totalhfoArray.unit,
            data: totalhfoData
          },
          totaliso: {
            id: totalisoArray.id,
            name: totalisoArray.name,
            unit: totalisoArray.unit,
            data: totalisoData
          },
          totallshfo: {
            id: totallshfoArray.id,
            name: totallshfoArray.name,
            unit: totallshfoArray.unit,
            data: totallshfoData
          },
          totalmdo: {
            id: totalmdoArray.id,
            name: totalmdoArray.name,
            unit: totalmdoArray.unit,
            data: totalmdoData
          },
          totalmgo: {
            id: totalmgoArray.id,
            name: totalmgoArray.name,
            unit: totalmgoArray.unit,
            data: totalmgoData
          },
          totalpilot: {
            id: totalpilotArray.id,
            name: totalpilotArray.name,
            unit: totalpilotArray.unit,
            data: totalpilotData
          }
        };
      }
      case 121: {
        let boilerfoArray = vessel.logVariables.find(x => x.id === 10391);
        let boilergasArray = vessel.logVariables.find(x => x.id === 10396);

        let keyArray = arrayOfKeys(state, gran, boilerfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfoArray,
          boilergasArray
        ]);

        let boilerfoData = dataArray[0];
        let boilergasData = dataArray[1];
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
      case 123: {
        let boilerhfoArray = vessel.logVariables.find(x => x.id === 42563);
        let boilerlsmgoArray = vessel.logVariables.find(x => x.id === 42564);
        let boilerfoArray = vessel.logVariables.find(x => x.id === 10700);
        let boilergasArray = vessel.logVariables.find(x => x.id === 10705);

        let keyArray = arrayOfKeys(state, gran, boilerhfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerhfoArray,
          boilerlsmgoArray,
          boilerfoArray,
          boilergasArray
        ]);

        let boilerhfoData = dataArray[0];
        let boilerlsmgoData = dataArray[1];
        let boilerfoData = dataArray[2];
        let boilergasData = dataArray[3];

        return {
          boilerhfo: {
            id: boilerhfoArray.id,
            name: boilerhfoArray.name,
            unit: boilerhfoArray.unit,
            data: boilerhfoData
          },
          boilerlsmgo: {
            id: boilerlsmgoArray.id,
            name: boilerlsmgoArray.name,
            unit: boilerlsmgoArray.unit,
            data: boilerlsmgoData
          },
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
      case 133: {
        let boilerfoArray = vessel.logVariables.find(x => x.id === 12101);
        let boilergasArray = vessel.logVariables.find(x => x.id === 12106);

        let keyArray = arrayOfKeys(state, gran, boilerfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfoArray,
          boilergasArray
        ]);

        let boilerfoData = dataArray[0];
        let boilergasData = dataArray[1];

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
        return "Vessel id not valid";
    }
  },
  getFuel: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110: {
        let boilerfuelArray = vessel.logVariables.find(x => x.id === 9024);
        let gcuArray = vessel.logVariables.find(x => x.id === 9060);
        let ge1Array = vessel.logVariables.find(x => x.id === 9064);
        let ge2Array = vessel.logVariables.find(x => x.id === 9088);
        let ge3Array = vessel.logVariables.find(x => x.id === 9098);
        let ge4Array = vessel.logVariables.find(x => x.id === 9122);

        let keyArray = arrayOfKeys(state, gran, boilerfuelArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfuelArray,
          gcuArray,
          ge1Array,
          ge2Array,
          ge3Array,
          ge4Array
        ]);

        let boilerfuelData = dataArray[0];
        let gcuData = dataArray[1];
        let ge1Data = dataArray[2];
        let ge2Data = dataArray[3];
        let ge3Data = dataArray[4];
        let ge4Data = dataArray[5];

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
      case 121: {
        let boilerfoArray = vessel.logVariables.find(x => x.id === 10391);
        let boilergasArray = vessel.logVariables.find(x => x.id === 10396);

        let keyArray = arrayOfKeys(state, gran, boilerfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfoArray,
          boilergasArray
        ]);

        let boilerfoData = dataArray[0];
        let boilergasData = dataArray[1];
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
      case 123: {
        let boilerfoArray = vessel.logVariables.find(x => x.id === 10700);
        let boilergasArray = vessel.logVariables.find(x => x.id === 10705);

        let keyArray = arrayOfKeys(state, gran, boilerfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfoArray,
          boilergasArray
        ]);

        let boilerfoData = dataArray[0];
        let boilergasData = dataArray[1];

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
      case 133: {
        let boilerfoArray = vessel.logVariables.find(x => x.id === 12101);
        let boilergasArray = vessel.logVariables.find(x => x.id === 12106);

        let keyArray = arrayOfKeys(state, gran, boilerfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfoArray,
          boilergasArray
        ]);

        let boilerfoData = dataArray[0];
        let boilergasData = dataArray[1];

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
  },
  getFuelTypesOld: state => (vesselid, from, to, gran) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110: {
        let boilerfuelArray = vessel.logVariables.find(x => x.id === 9024);
        let boilerhfoArray = vessel.logVariables.find(x => x.id === 9031);
        let boilerlshfoArray = vessel.logVariables.find(x => x.id === 9033);
        let boilermdoArray = vessel.logVariables.find(x => x.id === 9034);
        let boilermgoArray = vessel.logVariables.find(x => x.id === 9035);
        let ge12hfoArray = vessel.logVariables.find(x => x.id === 9080);
        let ge12isoArray = vessel.logVariables.find(x => x.id === 9081);
        let ge12lshfoArray = vessel.logVariables.find(x => x.id === 9082);
        let ge12mdoArray = vessel.logVariables.find(x => x.id === 9083);
        let ge12mgoArray = vessel.logVariables.find(x => x.id === 9084);
        let ge12pilotArray = vessel.logVariables.find(x => x.id === 9085);
        let ge34fuelArray = vessel.logVariables.find(x => x.id === 9109);
        let ge34tempArray = vessel.logVariables.find(x => x.id === 9112);
        let ge34hfoArray = vessel.logVariables.find(x => x.id === 9114);
        let ge34isoArray = vessel.logVariables.find(x => x.id === 9115);
        let ge34lshfoArray = vessel.logVariables.find(x => x.id === 9116);
        let ge34mdoArray = vessel.logVariables.find(x => x.id === 9117);
        let ge34mgoArray = vessel.logVariables.find(x => x.id === 9118);
        let ge34pilotArray = vessel.logVariables.find(x => x.id === 9119);

        let keyArray = arrayOfKeys(state, gran, boilerfuelArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          boilerfuelArray,
          boilerhfoArray,
          boilerlshfoArray,
          boilermdoArray,
          boilermgoArray,
          ge12hfoArray,
          ge12isoArray,
          ge12lshfoArray,
          ge12mdoArray,
          ge12mgoArray,
          ge12pilotArray,
          ge34fuelArray,
          ge34tempArray,
          ge34hfoArray,
          ge34isoArray,
          ge34lshfoArray,
          ge34mdoArray,
          ge34mgoArray,
          ge34pilotArray
        ]);

        let boilerfuelData = dataArray[0];
        let boilerhfoData = dataArray[1];
        let boilerlshfoData = dataArray[2];
        let boilermdoData = dataArray[3];
        let boilermgoData = dataArray[4];
        let ge12hfoData = dataArray[5];
        let ge12isoData = dataArray[6];
        let ge12lshfoData = dataArray[7];
        let ge12mdoData = dataArray[8];
        let ge12mgoData = dataArray[9];
        let ge12pilotData = dataArray[10];
        let ge34fuelData = dataArray[11];
        let ge34tempData = dataArray[12];
        let ge34hfoData = dataArray[13];
        let ge34isoData = dataArray[14];
        let ge34lshfoData = dataArray[15];
        let ge34mdoData = dataArray[16];
        let ge34mgoData = dataArray[17];
        let ge34pilotData = dataArray[18];

        return {
          boilerfuel: {
            id: boilerfuelArray.id,
            name: boilerfuelArray.name,
            unit: boilerfuelArray.unit,
            data: boilerfuelData
          },
          boilerhfo: {
            id: boilerhfoArray.id,
            name: boilerhfoArray.name,
            unit: boilerhfoArray.unit,
            data: boilerhfoData
          },
          boilerlshfo: {
            id: boilerlshfoArray.id,
            name: boilerlshfoArray.name,
            unit: boilerlshfoArray.unit,
            data: boilerlshfoData
          },
          boilermdo: {
            id: boilermdoArray.id,
            name: boilermdoArray.name,
            unit: boilermdoArray.unit,
            data: boilermdoData
          },
          boilermgo: {
            id: boilermgoArray.id,
            name: boilermgoArray.name,
            unit: boilermgoArray.unit,
            data: boilermgoData
          },
          ge12hfo: {
            id: ge12hfoArray.id,
            name: ge12hfoArray.name,
            unit: ge12hfoArray.unit,
            data: ge12hfoData
          },
          ge12iso: {
            id: ge12isoArray.id,
            name: ge12isoArray.name,
            unit: ge12isoArray.unit,
            data: ge12isoData
          },
          ge12lshfo: {
            id: ge12lshfoArray.id,
            name: ge12lshfoArray.name,
            unit: ge12lshfoArray.unit,
            data: ge12lshfoData
          },
          ge12mdo: {
            id: ge12mdoArray.id,
            name: ge12mdoArray.name,
            unit: ge12mdoArray.unit,
            data: ge12mdoData
          },
          ge12mgo: {
            id: ge12mgoArray.id,
            name: ge12mgoArray.name,
            unit: ge12mgoArray.unit,
            data: ge12mgoData
          },
          ge12pilot: {
            id: ge12pilotArray.id,
            name: ge12pilotArray.name,
            unit: ge12pilotArray.unit,
            data: ge12pilotData
          },
          ge34fuel: {
            id: ge34fuelArray.id,
            name: ge34fuelArray.name,
            unit: ge34fuelArray.unit,
            data: ge34fuelData
          },
          ge34temp: {
            id: ge34tempArray.id,
            name: ge34tempArray.name,
            unit: ge34tempArray.unit,
            data: ge34tempData
          },
          ge34hfo: {
            id: ge34hfoArray.id,
            name: ge34hfoArray.name,
            unit: ge34hfoArray.unit,
            data: ge34hfoData
          },
          ge34iso: {
            id: ge34isoArray.id,
            name: ge34isoArray.name,
            unit: ge34isoArray.unit,
            data: ge34isoData
          },
          ge34lshfo: {
            id: ge34lshfoArray.id,
            name: ge34lshfoArray.name,
            unit: ge34lshfoArray.unit,
            data: ge34lshfoData
          },
          ge34mdo: {
            id: ge34mdoArray.id,
            name: ge34mdoArray.name,
            unit: ge34mdoArray.unit,
            data: ge34mdoData
          },
          ge34mgo: {
            id: ge34mgoArray.id,
            name: ge34mgoArray.name,
            unit: ge34mgoArray.unit,
            data: ge34mgoData
          },
          ge34pilot: {
            id: ge34pilotArray.id,
            name: ge34pilotArray.name,
            unit: ge34pilotArray.unit,
            data: ge34pilotData
          }
        };
      }
      case 121:
      case 123:
      case 133:
      default:
        return "Only data for vessel 110 currently";
    }
  },
  getFuelTotal: state => (vesselid, from, to, gran) => {
    switch (vesselid) {
      case 110: {
        let totalfoArray = vessel.logVariables.find(x => x.id === 9139);
        let totalgasArray = vessel.logVariables.find(x => x.id === 9140);
        let totalhfoArray = vessel.logVariables.find(x => x.id === 9141);
        let totalisoArray = vessel.logVariables.find(x => x.id === 9142);
        let totallshfoArray = vessel.logVariables.find(x => x.id === 9143);
        let totalmdoArray = vessel.logVariables.find(x => x.id === 9144);
        let totalmgoArray = vessel.logVariables.find(x => x.id === 9145);
        let totalpilotArray = vessel.logVariables.find(x => x.id === 9146);

        let keyArray = arrayOfKeys(state, gran, totalfoArray);
        let dataArray = subsetOfData(state, gran, from, to, keyArray, [
          totalfoArray,
          totalgasArray,
          totalhfoArray,
          totalisoArray,
          totallshfoArray,
          totalmdoArray,
          totalmgoArray,
          totalpilotArray
        ]);

        let totalfoData = dataArray[0];
        let totalgasData = dataArray[1];
        let totalhfoData = dataArray[2];
        let totalisoData = dataArray[3];
        let totallshfoData = dataArray[4];
        let totalmdoData = dataArray[5];
        let totalmgoData = dataArray[6];
        let totalpilotData = dataArray[7];

        return {
          totalfo: {
            id: totalfoArray.id,
            name: totalfoArray.name,
            unit: totalfoArray.unit,
            data: totalfoData
          },
          totalgas: {
            id: totalgasArray.id,
            name: totalgasArray.name,
            unit: totalgasArray.unit,
            data: totalgasData
          },
          totalhfo: {
            id: totalhfoArray.id,
            name: totalhfoArray.name,
            unit: totalhfoArray.unit,
            data: totalhfoData
          },
          totaliso: {
            id: totalisoArray.id,
            name: totalisoArray.name,
            unit: totalisoArray.unit,
            data: totalisoData
          },
          totallshfo: {
            id: totallshfoArray.id,
            name: totallshfoArray.name,
            unit: totallshfoArray.unit,
            data: totallshfoData
          },
          totalmdo: {
            id: totalmdoArray.id,
            name: totalmdoArray.name,
            unit: totalmdoArray.unit,
            data: totalmdoData
          },
          totalmgo: {
            id: totalmgoArray.id,
            name: totalmgoArray.name,
            unit: totalmgoArray.unit,
            data: totalmgoData
          },
          totalpilot: {
            id: totalpilotArray.id,
            name: totalpilotArray.name,
            unit: totalpilotArray.unit,
            data: totalpilotData
          }
        };
      }
      case 121:
      case 123:
      case 133:
      default:
        return "Only for vessel 110 atm";
    }
  },
  dateFrom: state => {
    return state.fromDate.substring(0,10);
  },
  dateTo: state => {
    return state.toDate.substring(0,10);
  }
};

// ----------------- Private Helper Function ----------------- //

/**
 * Returns an array of keys which can be used to get corresponding values.
 *
 * @param state       to access state
 * @param gran        to get correct keys (Hour has 24x more than Day)
 * @param sampleArray an array that has the keys (dates)
 * @return            array of keys
 */
function arrayOfKeys(state, gran, sampleArray) {
  switch (gran) {
    case state.granularities.day:
      return sampleArray.dayData;
    case state.granularities.hour:
      return sampleArray.hourData;
    case state.granularities.quarterhour:
      return sampleArray.quarterhourData;
  }
}

/**
 * Returns a subset of data between from-date and to-date
 *
 * @param state    to access state
 * @param gran     to return the correct granularity of data
 * @param from     date
 * @param to       date
 * @param keyArray array of dates used to get the corresponding data
 * @param arrays   arrays to be made subsets of
 * @return         array of data subsets
 */

function subsetOfData(state, gran, from, to, keyArray, arrays) {
  let start = false;
  var dataArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    dataArrays.push({});
  }

  for (let key in keyArray) {
    if (key.substring(0, 10) == from.substring(0, 10)) {
      start = true;
    }
    if (key.substring(0, 10) == to.substring(0, 10)) {
      start = false;
    }
    if (start) {
      switch (gran) {
        case state.granularities.day:
          for (let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].dayData[key];
          }
          break;
        case state.granularities.hour:
          for (let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].hourData[key];
          }
          break;
        case state.granularities.quarterhour:
          for (let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].quarterhourData[key];
          }
          break;
      }
    }
  }
  return dataArrays;
}
