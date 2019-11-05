export function emailValidator(email) {
    let isValid = false;
    let regEmail = /^[a-zA-Z0-9]+(((\-|\_)(?=[a-zA-Z0-9]+))[a-zA-Z0-9]+)*@([a-zA-Z0-9]{2,}(((\-|\_)(?=[a-zA-Z0-9]+))[a-zA-Z0-9]+)*)(\.[a-z]{2,3}){1,3}$/;

    if (regEmail.test(email)) { // A letter validaor
        let firstPart = email.split('@');
        let reOneLetter = /[a-z]/ig;
        isValid = reOneLetter.test(firstPart[0]);
    } else {
        isValid = false;
    }
    let message = 'This email is invalid. Your input should seems like `example@email.com` ';
    if (isValid) {
        return true;
    } else {
        return {isValid, message};        
    }
}

export function basicPassword(pass) {
    let isValid = false;
    let regPass = /\w{4,}/;
    isValid = regPass.test(pass);
    let message = 'Password must contain alost 4 characters';
    if (isValid) {
        return true;
    } else {
        return {isValid, message}
    }
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