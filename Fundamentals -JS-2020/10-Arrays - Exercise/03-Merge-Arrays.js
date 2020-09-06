function mergeArrays(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;
    let thirdArr = [];

    for (let i = 0; i < firstArr.length; i++) {

        i % 2 == 0
            ? thirdArr.push(Number(firstArr[i]) + Number(secondArr[i]))
            : thirdArr.push(firstArr[i] + secondArr[i]);
    }

    thirdArr = thirdArr.join(' - '); 
    console.log(thirdArr);
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);



// short 

function mergeArrays(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;
    let thirdArr = [];

    firstArr.map((element, i) => {

        i % 2 == 0
            ? thirdArr.push(Number(firstArr[i]) + Number(secondArr[i]))
            : thirdArr.push(firstArr[i] + secondArr[i]);
    });

    thirdArr = thirdArr.join(' - '); 
    console.log(thirdArr);
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);