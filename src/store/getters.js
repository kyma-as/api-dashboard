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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [co2Array, so2Array]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [co2Array, so2Array]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [co2Array, so2Array]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [co2Array, so2Array]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [gpsArray, logArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [gpsArray, logArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [gpsArray, logArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [gpsArray, logArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [boilerfuelArray, gcuArray, ge1Array, ge2Array, ge3Array, ge4Array]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [boilerfoArray, boilergasArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [boilerfoArray, boilergasArray]);

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
        let dataArray = subsetOfData(state, gran, from, to, keyArray,
        [boilerfoArray, boilergasArray]);

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
  for(let i = 0; i < arrays.length; i++) {
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
          for(let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].dayData[key];
          }
          break;
        case state.granularities.hour:
          for(let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].hourData[key];
          }
          break;
        case state.granularities.quarterhour:
          for(let i = 0; i < arrays.length; i++) {
            dataArrays[i][key] = arrays[i].quarterhourData[key];
          }
          break;
      }
    }
  }
  return dataArrays;
}
