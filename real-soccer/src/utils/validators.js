/**
 * Verifies if the string is in a valid email format.
 * If it is a valid email, returns an object: {isValid=true, message: 'Successfull validation!'}
 * If it is not valid email, returns an object: {isValid=false, message: 'An message about the invalid email'}
 * @returns {object}
 * @param {string} email 
 */
export function emailValidator(email) {
    let isValid = false;
    let reFirstPart = /^[a-zA-Z0-9]{2,33}(((\-|\_|\.)(?=[a-zA-Z0-9]+))[a-zA-Z0-9]+)*/; // To evaluate since begining until before of the '@'
    let reSecondPart = /([a-zA-Z0-9]{2,33}(((\-|\_)(?=[a-zA-Z0-9]+))[a-zA-Z0-9]+)*)(\.[a-z]{2,3}){1,3}$/; // To evaluate since after the @ until the end of email
    let reEmail = new RegExp(reFirstPart.source + '@' + reSecondPart.source); // All regEx of the email
    let message = 'Watch out! Your input should seems like `example@email.com`. ';
    let emailSplited
    try {
        emailSplited = email.split('@'); // Getting first and second part of the email        
    } catch (error) {
        return {isValid, message}
    }
    if (emailSplited[0] == emailSplited[1]) { // Validation: First and second part must be different
        isValid = false;
        message += 'This email is not allowed. ';
    }
    let reOneLetter = /[a-z]/ig; // Validation: The username (username@example.com) must have at least a letter
    if (reOneLetter.test(emailSplited[0]) == false) {
        isValid = false;
        message += 'Your username must have at least one letter.';    
    }
    if (reEmail.test(email) && isValid) { // Validation: Everthing else
        isValid = true;
        message = 'Successfull validation!';
    }
    return {isValid, message};        
}

/**
 * Verifies if the string have at least n (defoult: 4) characters or more. 
 * If it is a valid pass, returns an object: {isValid=true, message: 'Successfull validation!'}
 * If it is not valid pass, returns an object: {isValid=false, message: 'Password must contain almost 4 characters'}
 * @returns {object}
 * @param {string} pass 
 */
export function basicPassword(pass=null, numCharacters=4) {
    let isValid = false;
    let message = 'Password must contain almost 4 characters';
    if(!pass.length) return {isValid, message}; // In case pass is null
    if (pass.length >= numCharacters) {
        message = 'Successfull validation!';
        isValid = true;
    }
    return {isValid, message};
}

export function hardPassword(pass) {
    let isValid = false;
    let regOneMayus = /[A-Z]/;
    let message = regOneMayus.test(pass) ? '' : 'Password must have at least a Mayus letter.';
    let regOneNumber = /[1-9]/;
    message = regOneNumber.test(pass) ? message : `${message} Password must have at least a number.`;
    message = pass.size >= 7 ? message : `${message} Password must have at 8 characters.`;
    if (regOneMayus.test(pass) && regOneNumber.test(pass) && (pass.size >= 8)) {
        return true;
    } else {
        return {isValid, message};
    }
}

export function onlyNumbers(number, size=8) {
    let isValid = false;
    let regOnlyNumbers = /^[1-9]{8,20}$/;
    let message = regOnlyNumbers.test(number) ? '' : 'This input accept only from 8 to 20 numbers. Letters or special characters are not allowed.';
    if (regOnlyNumbers.test(number)) {
        return true;
    } else {
        return {isValid, message};
    }
}