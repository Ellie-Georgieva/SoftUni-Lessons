function mathPower(numInput, powerInput) {
    let num = numInput;
    let power = powerInput;
    let result = 1;

    for (let i = 1 ; i <= power; i++) {
        result *= num;
    }

    return result;
}

let result = mathPower(2, 8);
let result = mathPower(3, 4);

console.log(result);




// short 

function mathPower(numInput, powerInput) {
    let num = numInput;
    let power = powerInput;

    return num ** power;
}

let result = mathPower(2, 8);
let result = mathPower(3, 4);

console.log(result);