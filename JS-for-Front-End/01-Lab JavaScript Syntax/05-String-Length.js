function stringLength(word1, word2, word3) {
    let arr = [word1, word2, word3]
    let avg = arr.join('').length;  
    let averagelength = Math.floor(avg / arguments.length);
console.log(avg);
console.log(averagelength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');


function stringLength(word1, word2, word3) {
    let arr = [word1, word2, word3]
    let avg = arr.join('').length;  
    let averagelength = Math.floor(avg / arr.length);
console.log(avg);
console.log(averagelength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');