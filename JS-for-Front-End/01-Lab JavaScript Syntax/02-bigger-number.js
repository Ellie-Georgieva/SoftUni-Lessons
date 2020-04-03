function biggerNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    if (firstNumber > secondNumber) {
        console.log(firstNumber) 
     } else {
        console.log(secondNumber);
       }
}
biggerNumber(['2', '3']);


function biggerNumber(input) {
    let firstNumber = input[0];
    let secondNumber = +input[1];
    if (firstNumber > secondNumber) return firstNumber 
      return secondNumber
}
console.log(biggerNumber(['2', '3']));