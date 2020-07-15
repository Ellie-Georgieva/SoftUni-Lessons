function mostPowerfulWord(arr) {
    let word = arr.shift();
    let powerfulWord = '';
    let powerfulWordPoints = 0;

    while (word != 'End of words') {
        let points = 0;

        for (let i = 0; i < word.length; i++) {

            points += word.charCodeAt(i) 
        }

        if (['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(word[0])) {
            points *= word.length;
        } else {
            points = Math.floor(points / word.length);
        }

        if (points > powerfulWordPoints) {
            powerfulWordPoints = points;
            powerfulWord = word;
        }

        word = arr.shift();
    }

    console.log(`The most powerful word is ${powerfulWord} - ${powerfulWordPoints}`);
}

mostPowerfulWord(['The', 'Most', 'Powerful', 'Word', 'Is', 'Experience', 'End of words']);
mostPowerfulWord(['But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words']);