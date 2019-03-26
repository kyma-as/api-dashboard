export function validateLogin(username,password) {
    return is_email(username) && is_password(password);
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