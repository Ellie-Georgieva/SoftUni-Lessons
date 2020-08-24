function reversedChars(firstCharInput, secondCharInput, thirdCharInput) {
    const firstChar = firstCharInput;
    const secondChar = secondCharInput;
    const thirdChar = thirdCharInput;

    let word = firstChar + secondChar + thirdChar;
    let reverse = word.split('').reverse().join(' ');
    console.log(reverse);
}

reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');