import { AST_LabeledStatement } from "terser";

export async function getApiData(urlParam, rows) {
  if (rows.length > 0) {
    rows = [];
  }
  let url = "https://demo.kyma.no/api/v1/" + urlParam;
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry of json) {
        for (let key in entry) {
          let str = `${key} --> ${entry[key]}`;
          rows.push(str);
        }
      }
    });
  return rows;
}

export async function getApiDataVessel(urlParam, rows) {
  if (rows.length > 0) {
    rows = [];
  }
  let url = "https://demo.kyma.no/api/v1/logvariables/find?vesselId=" + urlParam;
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry of json) {
        for (let key in entry) {
          let str = `${key} --> ${entry[key]}`;
          rows.push(str);
        }
      }
    });
  return rows;
}
export async function getApiDataTest(rows, labels) {
  let url = "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9177&granularity=Hour&fromDate=2019-01-01&toDate=2019-01-07";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        rows.push(json.data[entry]);
        labels.push(json.data)
      }
    });
    console.log(labels)
  return rows;
}
export async function getApiDataTest2(logspeed) {
  let url = "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9178&granularity=Hour&fromDate=2019-01-01&toDate=2019-01-07";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        logspeed.push(json.data[entry]);
      }
    });
    console.log(logspeed)
  return logspeed;
}



