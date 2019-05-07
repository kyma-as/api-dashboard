
export default {
  getSpeed: (state) => (vesselid) => {
    const vessel = state.vessels.find(vessel => vessel.id === vesselid);
    switch(vesselid){
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
  }
}
