/**
 * This class updates state with orders from actions.js
 * mutations.js has to be synchronous
 */

export default {
  ADD_VESSELS: (state, jsonArray) => {
    //state.vessels if it doesn't work
    state.vessels.push(jsonArray);
  },
  INCREMENT: (state) => {state.apiCallCount++;},
  APPEND_LOG_VARIABLES: (state, { vesselId, logVariableArray }) => {
    //state.vessels[vesselId] = logVariableArray;
    state.vessels[vesselId].push(...logVariableArray);
  }
}
