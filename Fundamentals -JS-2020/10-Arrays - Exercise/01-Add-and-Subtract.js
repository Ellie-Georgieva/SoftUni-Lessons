function addAndSubtract(arr) {
    let oldArr = arr;
    let oldArrSum = 0;
    let newArr = [];
    let newArrSum = 0;


    for (let i = 0; i < oldArr.length; i++) {
        oldArrSum += oldArr[i];
        let currentNum = 0;

        if (oldArr[i] % 2 == 0) {
            currentNum = oldArr[i] + i;
        } else {
            currentNum = oldArr[i] - i;
        }

        newArr.push(oldArr[i]);
        newArrSum += currentNum;
    }
    
    console.log(newArr);
    console.log(oldArrSum);
    console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);


// short

function addAndSubtract(arr) {
    let oldArr = arr;
    let newArr = [];

    oldArr.map((number, index) => {
        number % 2 == 0 
        ? number += index 
        : number -= index;
        newArr.push(number);
    });

    let oldArrSum = oldArr.reduce((a, b) => a + b, 0);
    let newArrSum = newArr.reduce((a, b) => a + b, 0);

    console.log(newArr);
    console.log(oldArrSum);
    console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);