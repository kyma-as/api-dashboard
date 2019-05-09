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
  APPEND_LOG_VARIABLES: (state, { vesselIndex, logVariableArray }) => {
    state.vessels[vesselIndex].logVariables = logVariableArray;
  },
  APPEND_LOG_DATA: (state, { logData, vesselIndex, logIndex }) => {
    state.vessels[vesselIndex].logVariables[logIndex].data = logData;
  },
  SET_DATE: (state, date) => {
    state.dateToday = date;
  },
  VESSELS_FETCHED: state => {
    state.fetchedVessels = true;
  }
};
