//import newly fetched data from files?


/**
 * Default state of application - containing the data that can
 * be pulled into any component.
 */
export default {

  vessels: [{id: 1, name: "hello"}, {id: 2, name: "goodbye"}],
  variables: [], //this is just an example
  apiCallCount: 0

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
