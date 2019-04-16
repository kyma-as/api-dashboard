import store from '../store.js';

let fetchUrl = "https://demo.kyma.no/api/v1/";

/**
 * Lists all vessels and their basic information
 * @returns {Promise} [{Vessel:{id:string, name:string}}]
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
 * @param vesselId
 * @returns {Promise} [{logVariable:{id:string, name:string, units:string, limitMin:string, limitMax:string}}]
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
 * @param logVariableId:string
 * @param fromDate:string yyyy-mm-dd
 * @param granularity:string Raw, Minute, QuarterHour, Hour, Day
 * @param toDate:string yyyy-mm-dd
 * @returns {Promise} Array of data
 */
export function getLogData(logVariableId, fromDate, granularity = "Hour", toDate = getCurrentDate()) {
    let headers = createHeader();
    let url = fetchUrl
        + `/logdata/find?logVariableId=${logVariableId} +
        &granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;

    return fetch(url, headers)
        .then(res => res.json())
        .then(logData => {
            let dataArray = [];
            for (let key in logData.data) {
                dataArray.push(logData.data[key]);
            }
            return dataArray;
        });
}


export function setVesselAttributesInStore() {
    getVessels().then(vessels => {
        let vesselsArray = vessels;
        for (let i = 0; i < vessels.length; i++) {
            let vesselId = vessels[i].id;
            getLogVariables(vesselId).then(logVariables => {
                vesselsArray[i].logVariables = logVariables;
                console.log(vesselsArray);
            });
        }
    });
}

/**
 * Gets current date
 * @private
 * @returns {string} of date yyyy-mm-dd
 */
function getCurrentDate() {
    let date = new Date;
    return "" + date.getFullYear() +
        "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/**
 * Creating headers from apiKey to fetch data
 * @private
 * @return {{headers: {Authorization: string}}}
 */
function createHeader() {
    let user = store.state.userInfo.apiKey;
    return {
        headers: {
            Authorization: 'Basic ' + user,
        }
    }
}