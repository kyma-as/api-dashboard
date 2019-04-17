/**
 * This class indirectly updates state by calling mutations.
 * actions.js can be asynchronous:
 * API calls reside in here because API calls wants to update state,
 * and actions.js support asynchronous functions.
 */


// maybe use context.dispatch to start another fetch with the new data?
// store.dispatch('fetchVessels').then(() => { ... }
export default {
    fetchVessels: async ({state, commit, dispatch}) => {
        let url = `${state.url}vessels`;
        let header = state.header;

        let res = await fetch(url, header);
        let vessels = await res.json();

        for (let vessel of vessels) {
            let newVessel = {
                id: vessel.id,
                name: vessel.name
            };
            commit('ADD_VESSELS', newVessel);
        }
        dispatch('getLogVariables');
        commit('INCREMENT');
    },

    getLogVariables: async ({state, commit}) => {
        let header = state.header;

        let vessels = state.vessels;
        for (let i = 0; i < vessels.length; i++) {
            let vesselId = vessels[i].id;

            let url = `${state.url}logvariables/find?vesselId=${vesselId}`;

            let res = await fetch(url, header);
            let json = await res.json();

            let logVariableArray = [];
            for (let logVariable of json) {
                let newLogVariable = {
                    id: logVariable.id,
                    name: logVariable.name,
                    limitMin: logVariable.validLimitMinimum,
                    limitMax: logVariable.validLimitMaximum
                };
                logVariableArray.push(newLogVariable);
            }
            let vesselIndex = i;
            commit('APPEND_LOG_VARIABLES', {vesselIndex:vesselIndex, logVariableArray});
            commit('INCREMENT');
        }
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
