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
  fetchVessels: async ({ state, commit, dispatch }) => {
    if (!state.fetchedVessels) {
      let url = `${state.url}vessels`;
      let header = state.header;

      let res = await fetch(url, header);
      let vessels = await res.json();

      let index = 0;
      for (let vessel of vessels) {
        // for each vessel the
        let newVessel = {
          // the vessel is stored in
          id: vessel.id, // state, and log variables
          name: vessel.name // are then fetched.
        };
        commit("ADD_VESSELS", newVessel);
        dispatch("getLogVariables", {
          vesselId: vessel.id,
          vesselIndex: index
        }); // fetches log variables
        index++; // for this vessel
      }

      commit("INCREMENT");
      commit("VESSELS_FETCHED");
    }
  },

  /**
   * Fetches log variables for the vessel (specified by the parameter id).
   * It subsequently dispatches a data fetching function to retrieve the data
   * for all log variables.
   * @param  ids:{vesselId,vesselIndex}
   */
  getLogVariables: async ({ state, commit, dispatch }, ids) => {
    let header = state.header;
    let vesselId = ids.vesselId;
    let url = `${state.url}logvariables/find?vesselId=${vesselId}`;

    let res = await fetch(url, header);
    let json = await res.json();

    let logVariableArray = [];
    for (let logVariable of json) {
      let newLogVariable = {
        id: logVariable.id,
        name: logVariable.name,
        limitMin: logVariable.validLimitMinimum,
        limitMax: logVariable.validLimitMaximum,
        unit: logVariable.unit.name
      };
      logVariableArray.push(newLogVariable);
    }
    commit("APPEND_LOG_VARIABLES", {
      vesselIndex: ids.vesselIndex,
      logVariableArray
    });
    commit("INCREMENT");
    dispatch("dataFetchLoop", ids.vesselIndex);
  },

  /**
   * Starts a fetch loop to indirectly gather all data for the vessel's
   * variables. For each logvariable an action is dispatched to fetch the
   * data for that variable.
   */
  dataFetchLoop: ({ state, dispatch }, vesselIndex) => {
    let logVariableArray = state.vessels[vesselIndex].logVariables;
    let logIndex = 0;
    for (let logVar of logVariableArray) {
      dispatch("getLogData", {
        vesselIndex: vesselIndex,
        logVarId: logVar.id,
        logIndex: logIndex
      });
      logIndex++;
    }
  },

  /**
   * Fetches the data for logvariable by id directly, wraps it in an object,
   * and appends it into state.
   * @param ids:{vesselIndex,logVarId,logIndex}
   */
  getLogData: async ({ state, commit }, ids) => {
    let logVariableId = ids.logVarId;
    let fromDate = "2019-04-01"; // hardcoded; provide better default
    let toDate = "2019-05-01"; // hardcoded; provide better default
    let granularity = "Day"; // good default?
    let header = state.header;
    let url = `${state.url}/logdata/find?logVariableId=${logVariableId}
            &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;
    let res = await fetch(url, header);
    let jsonLogData = await res.json();

    commit("APPEND_LOG_DATA", {
      logData: jsonLogData.data,
      vesselIndex: ids.vesselIndex,
      logIndex: ids.logIndex
    });
    commit("INCREMENT");
  },

  /**
   * Saves today's date into state. This date will be used when fetching
   * logdata, and get the most up-to-date data.
   *
   * NOTE: The demo environment won't necessarily have data corresponding
   * all the way back to today's date.
   */
  getCurrentDate: ({ commit }) => {
    let temp_date = new Date();
    let date =
      "" +
      temp_date.getFullYear() +
      "-" +
      (temp_date.getMonth() + 1) +
      "-" +
      temp_date.getDate();
    commit("SET_DATE", date);
    commit("INCREMENT");
  },
  /**
   * After authenticating in login will set the user to loggedIn
   * and login info in header
   */
  setLoggedIn:({commit},payload)=>{
    commit("SET_LOGGED_IN",payload.loggedIn);
  }
};
