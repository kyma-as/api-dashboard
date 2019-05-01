/**
 * This class updates state with orders from actions.js
 * mutations.js has to be synchronous
 */

export default {
  ADD_VESSELS: (state, jsonArray) => {
    state.vessels.push(jsonArray);
  },
  INCREMENT: (state) => {state.apiCallCount++;},
  APPEND_LOG_VARIABLES: (state, { vesselIndex, logVariableArray }) => {
    state.vessels[vesselIndex].logVariables=logVariableArray;
  },
  APPEND_LOG_DATA: (state, {dataObj,index}) => {
    state.vessels[index].logData.push(dataObj);
  },
  SET_DATE: (state, date) => {
    state.dateToday = date;
  }
}
