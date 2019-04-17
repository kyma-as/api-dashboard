/**
 * This class updates state with orders from actions.js
 * mutations.js has to be synchronous
 */

export default {
  addVessels: (state, json) => {
    //state.vessels if it doesn't work
    state[vessels].push(json);
  },
  addVariables: (state, vars) => {},
  increment: (state) => {state[apiCallCount]++;}
}
