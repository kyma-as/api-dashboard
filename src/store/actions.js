/**
 * This class indirectly updates state by calling mutations.
 * actions.js can be asynchronous:
 * API calls reside in here because API calls wants to update state,
 * and actions.js support asynchronous functions.
 */


// maybe use context.dispatch to start another fetch with the new data?
// store.dispatch('fetchVessels').then(() => { ... }
export default {

    /**
     * Fetches all available vessels and puts them into state.
     * Action is dispatched for each vessel to start retrieving logvariables.
     */
    fetchVessels: async ({state, commit, dispatch}) => {
        let url = `${state.url}vessels`;
        let header = state.header;

        let res = await fetch(url, header);
        let vessels = await res.json();

        for (let vessel of vessels) {               // for each vessel the
            let newVessel = {                       // the vessel is stored in
                id: vessel.id,                      // state, and log variables
                name: vessel.name,                  // are then fetched.
                logData: []
            };
            commit('ADD_VESSELS', newVessel);
            dispatch('getLogVariables', vessel.id); // fetches log variables
        }                                           // for this vessel

        commit('INCREMENT');
    },

    /**
     * Fetches log variables for the vessel (specified by the parameter id).
     * It subsequently dispatches a data fetching function to retrieve the data
     * for all log variables.
     * @param  {int}  id       [id of a vessel]
     */
    getLogVariables: async ({state, commit, dispatch}, id) => {
        let header = state.header;
        let vesselId = id;
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
        commit('APPEND_LOG_VARIABLES', {vesselIndex:vesselId, logVariableArray});
        commit('INCREMENT');
        store.dispatch('dataFetchLoop', vesselId);

    },

    /**
     * Starts a fetch loop to indirectly gather all data for the vessel's
     * variables. For each logvariable an action is dispatched to fetch the
     * data for that variable.
     */
    dataFetchLoop: ({state, dispatch}, id) {
      let vesselId = id;
      let logVariableArray = state.logVariableArray;
      for (let logvar of logVariableArray) {
        dispatch('getLogData',{vesselId: vesselId, logVarId: logvar.id});
      }
    },

    /**
     * Fetches the data for logvariable by id directly, wraps it in an object,
     * and appends it into state.
     */
    getLogData: async ( {state, commit }, ids) {
      let logVariableId = ids.logVarId;
      let vesselId = ids.vesselId;
      let fromDate = "2019-01-01";    // hardcoded; provide better default
      let toDate = "2019-01-02";      // hardcoded; provide better default
      let granularity = "Hour";       // good default?
      let header = state.header;
      let url = `${state.url}/logdata/find?logVariableId=${logVariableId}
            &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;

      let res = await fetch(url, header);
      let jsonLogData = await res.json();
      let dataArray = [];
      for (let key in jsonLogData.data) {
        dataArray.push(jsonLogData.data[key]);
      }
      let dataObj = {
        id: logVariableId,
        unit: jsonLogData["unit"],
        data: dataArray

      }

      commit('APPEND_LOG_DATA', dataObj);
      commit('INCREMENT');
    },

    /**
     * Saves today's date into state. This date will be used when fetching
     * logdata, and get the most up-to-date data.
     *
     * NOTE: The demo environment won't necessarily have data corresponding
     * all the way back to today's date.
     */
    getCurrentDate: ({commit}) => {
        let temp_date = new Date;
        let date = "" + temp_date.getFullYear() +
            "-" + (temp_date.getMonth() + 1) + "-" + temp_date.getDate();
        commit('SET_DATE', date);
    }

}
