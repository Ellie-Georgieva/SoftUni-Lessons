// While Loop

function accountBalance(arr) {
    let installments = Number(arr.shift());
    let increase = Number(arr.shift());
    let total = 0;
    let counter = 1

    while (counter <= installments) {

        if (increase <= 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;
        increase = Number(arr.shift());
        counter++
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

accountBalance([3, 5.51, 69.42, 100]);
accountBalance([5, 120, 45.55, -150]);

// For Loop

function accountBalance(arr) {
    let installments = Number(arr.shift());
    let total = 0;

    for ( let i = 0; i < installments; i++) {
        let increase = Number(arr.shift());

        if (increase <= 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

accountBalance([3, 5.51, 69.42, 100]);
accountBalance([5, 120, 45.55, -150]);