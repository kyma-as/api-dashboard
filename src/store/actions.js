/**
 * This class indirectly updates state by calling mutations.
 * actions.js can be asynchronous:
 * API calls reside in here because API calls wants to update state,
 * and actions.js support asynchronous functions.
 */

// TODO: maybe use context.dispatch to start another fetch with the new data?
export default {
  fetchVessels({ commit }, params) => {
    await fetch('demo.kyma.no/api/v1/' + params, {
      headers: {Authorization: "Basic ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="}
    })
      .then(res => res.json()).then(json => {
        //committing at any earlier point would require dispatch instead
        commit('addVessels', json);
        commit('increment');
      });
  }
}

// Just an example method, doesn't work now
export default {
  fetchVariables({ commit }, vars) => {
    await fetch('demo.kyma.no/api/v1/logvariables/find?' + vars, {
      headers: {Authorization: "Basic ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="}
    })
      .then(res => res.json()).then(json => {
        commit('addVessels', json);
        commit('increment');
      });
  }
}
