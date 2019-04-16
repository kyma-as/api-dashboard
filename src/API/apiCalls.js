import store from '../store.js';

let fetchUrl = "https://demo.kyma.no/api/v1/";

function createHeader() {
    let user = store.state.userInfo.apiKey;
    return { headers: { Authorization: 'Basic ' + user,
        }}
}

/**
 * Lists all vessels and their basic information
 * @returns: [{Vessel:{id:string, name:string}}]
 */
export function getVessels() {

}

/**
 * Finds log variables for sensors active on a vessel
 * @param: vesselId
 * @returns: [{logVariable:{id:string, name:string, units:string, limitMin:string, limitMax:string}}]
 */
export function getLogVariables(vesselId) {

}

/**
 * Finds log data for a specific sensor variable
 * @param: logVariableId:string, granularity:string, fromDate:string, toDate:string
 * Granularity: Raw, Minute, QuarterHour, Hour, Day
 * fromDate/toDate: yyyy-mm-dd
 * @returns: {}
 */
export function getLogData(logVariableId, granularity, fromDate, toDate) {

}