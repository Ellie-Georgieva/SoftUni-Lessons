function passwordValidator(passwordInput) {
    let password = passwordInput;
    let digitsAndLetters = true;
    let digitsCounter = 0;
    let digitsNum = false;
    let passwordLength = true;

    if ((password.length) >= 6 && (password.length) <= 10) {
        passwordLength = true;
    } else {
        console.log('Password must be between 6 and 10 characters');
    }

    for (let i = 0; i < password.length; i++) {
        let iCharCode = password[i].charCodeAt();

        if (iCharCode >= 48 && iCharCode <= 57) {
            digitsAndLetters = true;
            digitsCounter++;
        } else if ((iCharCode >= 65 && iCharCode <= 90) || iCharCode >= 97 && iCharCode <= 122) {
            digitsAndLetters = true;
        } else {
            digitsAndLetters = false;
            console.log('Password must consist only of letters and digits');
            break;
        }
    }

    if (digitsCounter >= 2) {
        digitsNum = true;
    } else {
        console.log('Password must have at least 2 digits');
    }

    if (digitsAndLetters == true && digitsNum == true && passwordLength == true) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');



// Nested Functions

function passwordValidator(passwordInput) {
    let password = passwordInput;

    function isValidLength(passwordInput) {
        let password = passwordInput;
        let passwordLength = false;

        if ((password.length) >= 6 && (password.length) <= 10) {
            passwordLength = true;
        }

        return passwordLength;
    }

    function isBetweenRange(ch, start, end) {
        return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
    }

    function containsOnlyLettersAndDigits (passwordInput) {
        let password = passwordInput;
        let isValid = true;

        for (ch of password) {
            if (!(
                isBetweenRange(ch, 'A', 'Z') ||
                isBetweenRange(ch, 'a', 'z') ||
                isBetweenRange(ch, '0', '9'))
            ) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    function containsLeastTwoDigits(passwordInput) {
        let password = passwordInput;
        let digitsCounter = 0;

        for (let ch of password) {
            if (isBetweenRange(ch, '0', '9')) {
                digitsCounter++;

                if (digitsCounter == 2) {
                    break;
                }
            }
        }

        return digitsCounter == 2 ? true : false;
    }
    
    let passwordLengthVal = isValidLength(password);
    if (!passwordLengthVal) {
        console.log('Password must be between 6 and 10 characters');
    }

    let containsOnlyLettersAndDigitsVal = containsOnlyLettersAndDigits(password);
    if (!containsOnlyLettersAndDigitsVal) {
        console.log('Password must consist only of letters and digits');
    }

    let containsLeastTwoDigitsVal = containsLeastTwoDigits(password);
    if (!containsLeastTwoDigitsVal) {
        console.log('Password must have at least 2 digits');
    }

    if (passwordLengthVal && containsOnlyLettersAndDigitsVal && containsLeastTwoDigitsVal) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');