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
  let url =
    "https://demo.kyma.no/api/v1/logvariables/find?vesselId=" + urlParam;
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
export async function getApiDataTest(rows) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9177&granularity=Day&fromDate=2019-01-01&toDate=2019-01-14";
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
      }
    });
  return rows;
}
export async function getApiDataTest2(logspeed) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9178&granularity=Day&fromDate=2019-01-01&toDate=2019-01-14";
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
  return logspeed;
}
export async function getApiDataTestlabels(labels) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9178&granularity=Day&fromDate=2019-01-01&toDate=2019-01-14";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        labels.push(entry);
      }
    });
  return labels;
}
export async function getHFO(HFO) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9031&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        HFO.push(json.data[entry]);
      }
    });
  return HFO;
}

export async function getMDO(MDO) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9034&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        MDO.push(json.data[entry]);
      }
    });
  return MDO;
}
export async function getISOMDO(ISOMDO) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9032&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        ISOMDO.push(json.data[entry]);
      }
    });
  return ISOMDO;
}
export async function getMGO(MGO) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9035&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        MGO.push(json.data[entry]);
      }
    });
  return MGO;
}
export async function getLSHFO(LSHFO) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9033&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        LSHFO.push(json.data[entry]);
      }
    });
  return LSHFO;
}
export async function getSlip(Slip) {
  let url =
    "https://demo.kyma.no/api/v1/logdata/find?logVariableId=9180&granularity=Hour&fromDate=2019-01-01&toDate=2019-09-01";
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  await fetch(url, {
    headers: {
      Authorization: "Basic " + user
    }
  })
    .then(res => res.json())
    .then(json => {
      for (let entry in json.data) {
        Slip.push(json.data[entry]);
      }
    });
  return Slip;
}
