function printNumbersInReversedOrder(arr) {
    arr.reverse()
    for (let numbers of arr)
    console.log(numbers);
}
printNumbersInReversedOrder([10, 15, 20]);
printNumbersInReversedOrder([5, 5.5, 24, -3]);
printNumbersInReversedOrder([20, 1, 20, 1, 20]);


function printNumbersInReversedOrder2(arr) {
    arr.reverse().forEach(element => {
        console.log(element);
    });
    }
printNumbersInReversedOrder2([10, 15, 20]);
printNumbersInReversedOrder2([5, 5.5, 24, -3]);
printNumbersInReversedOrder2([20, 1, 20, 1, 20]);


function printNumbersInReversedOrderMap(arr) {
    arr.reverse().map(e => {
        console.log(e);
    });
    }
printNumbersInReversedOrderMap([10, 15, 20]);
printNumbersInReversedOrderMap([5, 5.5, 24, -3]);
printNumbersInReversedOrderMap([20, 1, 20, 1, 20]);