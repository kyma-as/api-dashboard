import store from "../store";

/**
 * Finds log data for a specific sensor variable
 * @param logVariableId:string
 * @param fromDate:string yyyy-mm-dd
 * @param granularity:string Raw, Minute, QuarterHour, Hour, Day
 * @param toDate:string yyyy-mm-dd
 * @returns {Promise} Array of data
 */
export function getLogData(
  logVariableId,
  fromDate,
  granularity = "Hour",
  toDate = getCurrentDate()
) {
  let headers = store.state.header;
  let url =
    store.state.url +
    `logdata/find?logVariableId=${logVariableId}&granularity=${granularity}&fromDate=${fromDate}&toDate=${toDate}`;

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

/**
 * Gets current date
 * @private
 * @returns {string} of date yyyy-mm-dd
 */
function getCurrentDate() {
  let date = new Date();
  return (
    "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
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
      Authorization: "Basic " + user
    }
  };
}
