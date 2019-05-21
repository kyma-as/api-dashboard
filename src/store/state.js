//import newly fetched data from files?

/**
 * Default state of application - containing the data that can
 * be pulled into any component.
 */
export default {
  /**
   * -- [Get GPS speed (9177) of vessel 110] --
   *
   * correctVessel = vessels.find(x => x.id === 110);
   * gpsSpeedArray = correctVessel["logData"].find(x => x.id === 9177);
   *
   */
  vessels: [],
  apiCallCount: 0,
  header: {
    headers: {
      Authorization: "Basic ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="
    }
  },
  url: "https://demo.kyma.no/api/v1/",
  dateToday: "",
  fetchedVessels: false,
  loggedIn:false
};
