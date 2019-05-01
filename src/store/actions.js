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

        let index = 0;
        for (let vessel of vessels) {               // for each vessel the
            let newVessel = {                       // the vessel is stored in
                id: vessel.id,                      // state, and log variables
                name: vessel.name,                  // are then fetched.
                logData: []
            };
            commit('ADD_VESSELS', newVessel);
            dispatch('getLogVariables', {id: vessel.id, index: index}); // fetches log variables
            index++;                                // for this vessel
        }

        commit('INCREMENT');
    },

    /**
     * Fetches log variables for the vessel (specified by the parameter id).
     * It subsequently dispatches a data fetching function to retrieve the data
     * for all log variables.
     * @param  {id,index}
     */
    getLogVariables: async ({state, commit, dispatch}, id) => {
        let header = state.header;
        let vesselId = id.id;
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
        commit('APPEND_LOG_VARIABLES', {vesselIndex: id.index, logVariableArray});
        commit('INCREMENT');
        dispatch('dataFetchLoop', id.index);

    },

    /**
     * Starts a fetch loop to indirectly gather all data for the vessel's
     * variables. For each logvariable an action is dispatched to fetch the
     * data for that variable.
     */
    dataFetchLoop: ({state, dispatch}, index) => {
        let logVariableArray = state.vessels[index].logVariables;
        for (let logVar of logVariableArray) {
            dispatch('getLogData', {vesselIndex: index, logVarId: logVar.id});
        }
    },

    /**
     * Fetches the data for logvariable by id directly, wraps it in an object,
     * and appends it into state.
     * @param state
     * @param commit
     * @param ids:{vesselIndex,logVarId}
     */
    getLogData: async ({state, commit}, ids) => {
        let logVariableId = ids.logVarId;
        let fromDate = "2019-01-01";    // hardcoded; provide better default
        let toDate = "2019-01-02";      // hardcoded; provide better default
        let granularity = "Day";       // good default?
        let header = state.header;
        let url = `${state.url}/logdata/find?logVariableId=${logVariableId}
            &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;
        let res = await fetch(url, header);
        let jsonLogData = await res.json();

        let dataObj = {
            id: logVariableId,
            unit: jsonLogData["unit"],
            data: jsonLogData.data

        };

        commit('APPEND_LOG_DATA', {dataObj, index:ids.vesselIndex});
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
