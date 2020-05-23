// For Loop

function numDividedBy3() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

numDividedBy3();


// While Loop 

function numDividedBy3() {
    let start = 1;
    let end = 100;

    while (start <= end) {
        if (start % 3 == 0) {
            console.log(start);
        }
        start += 1;
    }
}

numDividedBy3();

