function rightPlace(firstStringInput, charInput, secondStringInput) {
    let firstString = firstStringInput;
    let char = charInput;
    let secondString = secondStringInput;
    let newString = '';

    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] === '_') {
            newString += char;
        } else {
            newString += firstString[i];
        }
    }

    newString == secondString
    ? console.log('Matched')
    : console.log('Not Matched'); 
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');


// Short 

function rightPlace(firstStringInput, charInput, secondStringInput) {
    let firstString = firstStringInput;
    let char = charInput;
    let secondString = secondStringInput;
    
    let newString = firstString.replace('_', char);

    newString == secondString
    ? console.log('Matched')
    : console.log('Not Matched'); 
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');