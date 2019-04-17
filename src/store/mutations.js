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
  }
}
