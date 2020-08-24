function lowerOrUpper(characterInput) {
    const character = characterInput;

    if (character.charCodeAt() > 97) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}

lowerOrUpper('L');
lowerOrUpper('f');