function multiplyTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let result = x * y
    console.log(result);
}
multiplyTwoNumbers([2, 3]);
multiplyTwoNumbers([13, 13]);
multiplyTwoNumbers([1, 2]);
multiplyTwoNumbers([0, 50]);



function multiplyTwoNumbersReturn(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    return x * y
}
console.log(multiplyTwoNumbersReturn([2, 3]));
console.log(multiplyTwoNumbersReturn([13, 13]));
console.log(multiplyTwoNumbersReturn([1, 2]));
console.log(multiplyTwoNumbersReturn([0, 50]));




function multiplyTwoNumbersReturn2(arr) {
    let x = +arr[0];
    let y = +arr[1];
    return x * y
}
console.log(multiplyTwoNumbersReturn2([2, 3]));
console.log(multiplyTwoNumbersReturn2([13, 13]));
console.log(multiplyTwoNumbersReturn2([1, 2]));
console.log(multiplyTwoNumbersReturn2([0, 50]));