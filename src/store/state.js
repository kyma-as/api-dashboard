//import newly fetched data from files?


/**
 * Default state of application - containing the data that can
 * be pulled into any component.
 */
export default {

  vessels: [],
  apiCallCount: 0,
  header: { headers: {
    Authorization: "Basic ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="
    }
  },
  url: "https://demo.kyma.no/api/v1/"

  //possible objects:
  //vessels = [{id:1, name:"bergen"..}, {..}];
  //{Vessel: {
  //  id:String,
  //  name:String
  //}}

  //old solution
  // userInfo:{
  //   apiKey:"ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg=="
  // },
  // allVessels:[], //Vessel Object
  // currentVessel:{}, //Current Vessel
}
