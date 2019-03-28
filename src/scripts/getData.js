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

export function getApiDataVessel(urlParam, rows) {
  if (rows.length > 0) {
    rows = [];
  }
  let url = "https://demo.kyma.no/api/v1/logvariables/find?vesselId=" + urlParam;
  let user = "ZGVtb0BreW1hZGF0YS5jb206ZGVtb2JydWtlcg==";

  fetch(url, {
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
      return rows;
    });
}
