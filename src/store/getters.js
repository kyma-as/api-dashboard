export default {
  getSpeed: state => vesselid => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        return {
          gps: vessel.logVariables.find(x => x.id === 9177),
          log: vessel.logVariables.find(x => x.id === 9178)
        };
      case 121:
        return {
          gps: vessel.logVariables.find(x => x.id === 10481),
          log: vessel.logVariables.find(x => x.id === 10482)
        };
      case 133:
        return {
          gps: vessel.logVariables.find(x => x.id === 12191),
          log: vessel.logVariables.find(x => x.id === 12192)
        };
      case 123:
        return {
          gps: vessel.logVariables.find(x => x.id === 10803),
          log: vessel.logVariables.find(x => x.id === 10804)
        };
      default:
        return "No matching vessel id";
    }
  },
  getFuel: state => vesselid => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch (vesselid) {
      case 110:
        return {
          boilerfuel: vessel.logVariables.find(x => x.id === 9024),
          gcu: vessel.logVariables.find(x => x.id === 9060),
          ge1: vessel.logVariables.find(x => x.id === 9064),
          ge2: vessel.logVariables.find(x => x.id === 9088),
          ge3: vessel.logVariables.find(x => x.id === 9098),
          ge4: vessel.logVariables.find(x => x.id === 9122)
        };
      case 121:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 10391),
          boilergas: vessel.logVariables.find(x => x.id === 10396)
        };
      case 123:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 10700),
          boilergas: vessel.logVariables.find(x => x.id === 10705)
        };
      case 133:
        return {
          boilerfo: vessel.logVariables.find(x => x.id === 12101),
          boilergas: vessel.logVariables.find(x => x.id === 12106)
        };
      default:
        return "No matching vessel id";
    }
  }
};
