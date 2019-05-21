export function validateLogin(username, password) {
  return is_email(username) && is_password(password);
}
export async function authenticateLogin(headerParams) {
  return callApi(headerParams);
}

/*
Creates a header object to use with fetch
 */
export function convertToBase64(username, password) {
  const userInfo = Buffer.from(`${username}:${password}`).toString("base64");
  return { headers: { Authorization: "Basic " + userInfo } };
}
/*
Checks if username and password is correct by calling the API
Returns boolean
 */
async function callApi(
  params,
  urlString = "https://demo.kyma.no/api/v1/vessels"
) {
  return await fetch(urlString, params)
    .then(response => {
      //console.log(!!(response.status == '200'))
      return response.status == "200";
    })
    .catch(reason => {
      console.log("Fetch problem: " + reason.message);
    });
}
/*
Checks if string fits the regex
Returns boolean
 */
function is_email(email) {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailReg.test(email);
}

/*
Checks if any password is input
Returns boolean
 */
function is_password(password) {
  return password.length > 0;
}
