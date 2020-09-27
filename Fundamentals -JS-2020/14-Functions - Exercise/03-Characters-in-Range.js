function charactersInRange(firstCharInput, secondCharInput) {
    let firstChar = firstCharInput;
    let secondChar = secondCharInput;
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt()) + 1;
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let characters = '';

    for (let i = start; i < end; i++) {
        characters += String.fromCharCode(i) + ' ';
    }

    console.log(characters);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');