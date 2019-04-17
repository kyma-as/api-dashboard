/**
 * This class indirectly updates state by calling mutations.
 * actions.js can be asynchronous:
 * API calls reside in here because API calls wants to update state,
 * and actions.js support asynchronous functions.
 */


// maybe use context.dispatch to start another fetch with the new data?
// store.dispatch('fetchVessels').then(() => { ... }
export default {

  async function fetchVessels({ state, commit }, params) {
    let url = `${state.url}${params}`;
    let header = state.header;
    let res = await fetch(url,header);
    let json = await res.json();

    let vessels = [];
    for (let vessel of json) {
      let newVessel = {
        id: vessel.id,
        name: vessel.name,
        logVariables: []
      };
      vessels.push(newVessel);
    }
    commit('ADD_VESSELS', vessels);
    // TODO: add a dispatcher to call getLogVariables
    commit('INCREMENT');
  },

  async function getLogVariables({ state, commit }, vesselId) {
    // TODO: implement header function
    let header = state.header;
    let url = `${state.url}'/logvariables/find?vesselId='${vesselId}`;
    let res = await fetch(url, header);
    let json = await res.json();

    let logVariableArray = [];
    for (let logVariable of logVariables) {
      let newLogVariable = {
        id: logVariable.id,
        name: logVariable.name,
        limitMin: logVariable.validLimitMinimum,
        limitMax: logVariable.validLimitMaximum
      };
      logVariableArray.push(newLogVariable);
    }
    commit('APPEND_LOG_VARIABLES', {vesselId, logVariableArray});
    commit('INCREMENT');
  }

  // TODO: figure out where this function belongs
  /*
  async function getLogData( {state, commit }, logVariableId, fromDate,
    granularity = "Hour", toDate = getCurrentDate()) {
    let header = state.header;
    let url = `${state.url}/logdata/find?logVariableId=${logVariableId}
          &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;

    let res = await fetch(url, header);
    let jsonLogData = res.json();
    let dataArray = [];
    for (let key in jsonLogData.data) {
      dataArray.push(jsonLogData.data[key]);
    }
    return dataArray;
  },*/



}
