/**
 * This class updates state with orders from actions.js
 * mutations.js has to be synchronous
 */

export default {
  ADD_VESSELS: (state, jsonArray) => {
    state.vessels.push(jsonArray);
  },
  INCREMENT: state => {
    state.apiCallCount++;
  },
  // -- NOT USED IN THIS VERSION --
  // APPEND_LOG_VARIABLES: (state, { vesselIndex, logVariableArray }) => {
  //   state.vessels[vesselIndex].logVariables = logVariableArray;
  // },

  APPEND_LOG_VARIABLE: (state, { vesselIndex, logVar }) => {
    state.vessels[vesselIndex].logVariables.push(logVar);
  },
  APPEND_DAY_DATA: (state, { logData, vesselIndex, logIndex }) => {
    state.vessels[vesselIndex].logVariables[logIndex].dayData = logData;
  },
  APPEND_HOUR_DATA: (state, { logData, vesselIndex, logIndex }) => {
    state.vessels[vesselIndex].logVariables[logIndex].hourData = logData;
  },
  APPEND_QUARTERHOUR_DATA: (state, { logData, vesselIndex, logIndex }) => {
    state.vessels[vesselIndex].logVariables[logIndex].quarterhourData = logData;
  },
  APPEND_UNIT: (state, { unit, vesselIndex, logIndex }) => {
    state.vessels[vesselIndex].logVariables[logIndex].unit = unit;
  },

  SET_TODAY_DATE: (state, date) => {
    state.dateToday = date;
  },
  SET_YESTERDAY_DATE:(state,date)=>{
    state.dateYesterday = date;
  },
  SET_FROM_DATE:(state,fDate)=>{
    state.fromDate = fDate;
  },
  SET_TO_DATE: (state, tDate) => {
    state.toDate = tDate;
  },
  VESSELS_FETCHED: state => {
    state.fetchedVessels = true;
  },
  SET_LOGGED_IN: (state, payload) => {
    state.loggedIn = payload;
  },
  SET_HEADER: (state, payload) => {
    state.header = payload;
  }
};
