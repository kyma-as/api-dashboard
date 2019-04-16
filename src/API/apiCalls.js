import store from '../store.js';

let fetchUrl = "https://demo.kyma.no/api/v1/";

function createHeader() {
    let user = store.state.userInfo.apiKey;
    return {
        headers: {
            Authorization: 'Basic ' + user,
        }
    }
}

/**
 * Lists all vessels and their basic information
 * @returns {Promise:[{Vessel:{id:string, name:string}}]}
 */
export function getVessels() {
    let headers = createHeader();
    let url = fetchUrl + "/vessels";

    return fetch(url, headers)
        .then(res => res.json())
        .then(vessels => {
            let vesselArray = [];
            for (let vessel of vessels) {
                let newVessel = {
                    id: vessel.id,
                    name: vessel.name
                };
                vesselArray.push(newVessel);
            }
            return vesselArray;
        });
}

/**
 * Finds log variables for sensors active on a vessel
 * @param: vesselId
 * @returns {Promise:[{logVariable:{id:string, name:string, units:string, limitMin:string, limitMax:string}}]}
 */
export function getLogVariables(vesselId) {
    let headers = createHeader();
    let url = fetchUrl + `/logvariables/find?vesselId=${vesselId}`;

    return fetch(url, headers)
        .then(res => res.json())
        .then(logVariables => {
            let logVariableArray = [];
            for (let logVariable of logVariables) {
                let newLogVariable = {
                    id: logVariable.id,
                    name: logVariable.name,
                    limitMin: logVariable.validLimitMinimum,
                    limitMax: logVariable.validLimitMaximum
                };
                logVariableArray.push(newLogVariable);
            }
            return logVariableArray
        });
}

/**
 * Finds log data for a specific sensor variable
 * @param: logVariableId:string, fromDate:string, granularity:string, toDate:string
 * Granularity: Raw, Minute, QuarterHour, Hour, Day
 * fromDate/toDate: yyyy-mm-dd
 * @returns {}
 */
export function getLogData(logVariableId, fromDate, granularity = "Hour", toDate = getCurrentDate()) {
    let headers = createHeader();

    let url = fetchUrl
        + `/logdata/find?logVariableId=${logVariableId} +
        &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;


    fetch(url, headers)
        .then(res => res.json())
        .then(logData => {

        });
}

/**
 * Gets current date
 * @returns {string} of date yyyy-mm-dd
 */
function getCurrentDate() {
    let date = new Date;
    return "" + date.getFullYear() +
        "-" + date.getMonth() + "-" + date.getDate();

}