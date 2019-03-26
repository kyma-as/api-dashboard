export function validateLogin(username,password) {
    return is_email(username) && is_password(password);
}
export function authenticateLogin(username,password) {
    const params = convertToBase64(username,password);
    return true;
}

function convertToBase64(username,password) {
    const userInfo = Buffer.from(`${username}:${password}`).toString('base64');
    console.log(userInfo);
    return { headers: { Authorization: 'Basic ' + userInfo }};
}

/*
Checks if string fits the regex
Returns boolean
 */
function is_email(email){
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test(email);
}

/*
Checks if any password is input
Returns boolean
 */
function is_password(password){
    return password.length > 0;
}