function streamOfLetters(arr) {
    let stream = '';
    let word = '';
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let c = false;
    let o = false;
    let n = false;

    while (true) {
        let letter = arr.shift();

        if (letter == 'End') {
            break;
        }

        if (letters.includes(letter)) {
            if (letter == 'c' && c == false) {
                c = true;
            } else if (letter == 'o' && o == false) {
                o = true;
            } else if (letter == 'n' && n == false) {
                n = true
            } else {
                stream += letter;
            }
        }

        if (c == true && o == true && n == true) {
            stream += ' ';
            c = false;
            o = false;
            n = false;
            word += stream;
            stream = '';
        }
    }

    console.log(word);
}

streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);
streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);