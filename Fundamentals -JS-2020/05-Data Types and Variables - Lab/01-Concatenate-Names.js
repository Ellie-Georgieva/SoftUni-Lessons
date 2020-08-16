function concatenateNames(firstNameInput, secondNameInput, delimiterInput) {
    let firstName = firstNameInput;
    let secondName = secondNameInput;
    let delimiter = delimiterInput;

    console.log(`${firstName}${delimiter}${secondName}`);
}

concatenateNames('John', 'Smith', '->');
concatenateNames('Jan', 'White', '<->');
concatenateNames('Linda', 'Terry', '=>');