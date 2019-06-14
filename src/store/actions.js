/**
 * This class indirectly updates state by calling mutations.
 * actions.js can be asynchronous:
 * API calls reside in here because API calls wants to update state,
 * and actions.js support asynchronous functions.
 */

export default {
  /**
   * Fetches all available vessels and puts them into state.
   * Action is dispatched for each vessel to start retrieving
   * a subset of available logvariables.
   */
  fetchVessels: async ({ state, commit, dispatch }) => {
    if (!state.fetchedVessels) {
      let url = `${state.url}vessels`;
      let header = state.header;

      let res = await fetch(url, header);
      let vessels = await res.json();

      let index = 0;
      for (let vessel of vessels) {
        let newVessel = {
          id: vessel.id,
          name: vessel.name,
          logVariables: []
        };
        commit("ADD_VESSELS", newVessel);
        dispatch("dataFetchLoop2", {
          vesselId: vessel.id,
          vesselIndex: index
        });
        index++;
      }
      commit("INCREMENT");
      commit("VESSELS_FETCHED");
    }
  },

  /**
   * Initializes array of logvariables.
   * Dispatches actions to fetch data by different granularities.
   * @param  ids:{vesselId,vesselIndex}
   *
   */
  dataFetchLoop2: async ({ state, commit, dispatch }, ids) => {
    let header = state.header;
    let vesselId = ids.vesselId;
    let vesselIndex = ids.vesselIndex;
    // a subset of variables for this vessel
    let varObj = state.default_vars.find(x => x.id === vesselId);
    let i = 0;
    for (let key in varObj.variables) {
      let logVar = {
        id: varObj.variables[key].id,
        name: varObj.variables[key].name,
        unit: "",
        dayData: [],
        hourData: [],
        quarterhourData: []
      };
      // pushes this logvariable to state without data
      commit("APPEND_LOG_VARIABLE", {
        vesselIndex,
        logVar
      });

      dispatch("getLogData", {
        vesselIndex: ids.vesselIndex,
        vesselId: ids.vesselId,
        varId: varObj.variables[key].id,
        name: varObj.variables[key].name,
        granularity: "Day",
        logIndex: i
      });
      dispatch("getLogData", {
        vesselIndex: ids.vesselIndex,
        vesselId: ids.vesselId,
        varId: varObj.variables[key].id,
        name: varObj.variables[key].name,
        granularity: "Hour",
        logIndex: i
      });
      dispatch("getLogData", {
        vesselIndex: ids.vesselIndex,
        vesselId: ids.vesselId,
        varId: varObj.variables[key].id,
        name: varObj.variables[key].name,
        granularity: "QuarterHour",
        logIndex: i
      });
      i++;
    }
  },

  /** -- NOT USED IN THIS VERSION --
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

  /** -- NOT USED IN THIS VERSION --
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
   * @param payload:{vesselIndex,vesselId,varId,granularity,logIndex}
   */
  getLogData: async ({ state, commit }, payload) => {
    let logVariableId = payload.varId;
    let fromDate = "2016-01-01";
    let toDate = state.dateToday; // + T23:45:00???
    let granularity = payload.granularity;
    if (granularity == "QuarterHour") {
      fromDate = "2019-04-15"; // ~ two tweeks
    }
    let header = state.header;
    let url = `${state.url}/logdata/find?logVariableId=${logVariableId}
            &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;

    let res = await fetch(url, header);
    let jsonLogData = await res.json();

    commit("APPEND_UNIT", {
      unit: jsonLogData.unit.name,
      vesselIndex: payload.vesselIndex,
      logIndex: payload.logIndex
    });

    switch (granularity) {
      case "Day":
        commit("APPEND_DAY_DATA", {
          logData: jsonLogData.data,
          vesselIndex: payload.vesselIndex,
          logIndex: payload.logIndex
        });
        break;
      case "Hour":
        commit("APPEND_HOUR_DATA", {
          logData: jsonLogData.data,
          vesselIndex: payload.vesselIndex,
          logIndex: payload.logIndex
        });
        break;
      case "QuarterHour":
        commit("APPEND_QUARTERHOUR_DATA", {
          logData: jsonLogData.data,
          vesselIndex: payload.vesselIndex,
          logIndex: payload.logIndex
        });
    }

    commit("INCREMENT");
  },

  /**
   * Saves today's date into state. This date will be used when fetching
   * logdata, and get the most up-to-date data.
   *
   * NOTE: The demo environment won't necessarily have data corresponding
   * all the way back to today's date.
   */
  getCurrentDate: ({ commit, dispatch }) => {
    // Today
    let date = new Date();
    let todayDate = date.toJSON().substring(0,19);
    commit("SET_TODAY_DATE", todayDate);

    // Yesterday
    date = new Date();
    date.setDate(date.getDate()-1);
    let yesterdayDate = date.toJSON().substring(0,19);

    commit("SET_YESTERDAY_DATE", yesterdayDate);
    dispatch('setDates', {to: todayDate, from: yesterdayDate})

  },

  setDates: ({ commit }, dates) => {
    if (!!dates.from) {
      commit("SET_FROM_DATE", dates.from);
    }
    if (!!dates.to) {
      commit("SET_TO_DATE", dates.to);
    }
  },

  /**
   * After authenticating in login will set the user to loggedIn
   * and login info in header
   */
  setLoggedIn: ({ commit }, payload) => {
    commit("SET_LOGGED_IN", payload.loggedIn);
    commit("SET_HEADER", payload.headerParams);
  }
};
