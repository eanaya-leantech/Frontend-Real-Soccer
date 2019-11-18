/**
 * Verifies if the string is in a valid email format.
 * @param {string} email 
 * @returns {object} {isValid=true, message: 'Successfull validation!'}
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
 * @param {string} pass
 * @param {int} numCharacters
 * @returns {object} {isValid=false, message: 'Password must contain almost 4 characters'}
 */
export function basicPassword(pass=null, numCharacters=4) {
    let isValid = false;
    let message = 'Password must contain almost 4 characters';
    if(!pass) return {isValid, message}; // In case pass is null
    if (pass.length >= numCharacters) {
        message = 'Successfull validation!';
        isValid = true;
    }
    return {isValid, message};
}

/**
 * Verifies if the string have:
 * 1. a Mayus letter
 * 2. a number character
 * 3. at least 8 characteres of length
 * @param {string} pass password to validate
 * @returns {object} {isValid=true, message: 'Successfull validation!'}
 */
export function hardPassword(pass=null) {
    let isValid = false;
    let message = 'Invalid password!';
    if (!pass) {
        return {isValid, message}
    }
    isValid = false;
    let regOneMayus = /[A-Z]/;
    message = regOneMayus.test(pass) ? '' : 'Password must have at least a Mayus letter.'; // 1.
    let regOneNumber = /[1-9]/;
    message = regOneNumber.test(pass) ? message : `${message} Password must have at least a number.`; // 2.
    message = pass.length >= 7 ? message : `${message} Password must have at 8 characters.`; //3.
    if (regOneMayus.test(pass) && regOneNumber.test(pass) && (pass.length >= 8)) { // Validation: 1,2,3
        isValid = true;
        message = 'Successfull validation!';
    }
    return {isValid, message};
}

/**
 * Verifies if there are only numbers. Example: phone number
 * @param {string} number This is the number to evaluate
 * @param {number} minSize minimal length allowed
 * @param {number} maxSize Maximal length allowed
 * @returns {object} {isValid=true, message: 'Successfull validation!'}
 */
export function onlyNumbers(number=null, minSize=8, maxSize=minSize+8) {
    let isValid = false;
    if(!number) return {isValid: false, message: 'Please enter a number'}
    number = number.toString();
    let regOnlyNumbers = /^[0-9]+$/;
    let message = regOnlyNumbers.test(number) ? '' : 'Letters or special characters are not allowed.';
    message = number.length < minSize ? `${message} This number must have at least ${minSize} characters.` : message;
    message = number.length > maxSize ? `${message} It must have less than ${maxSize} numbers.` : message;
    if (regOnlyNumbers.test(number) 
        && number.length >= minSize
        && number.length <= maxSize) 
    {
        isValid = true;
        message = 'Successfull validation!';
    }
    return {isValid, message};
}