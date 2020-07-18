function luggageTax(arr) {
    let widthSuitcase = Number(arr.shift());
    let heightSuitcase = Number(arr.shift());
    let depthSuitcase = Number(arr.shift());
    let ticket = arr.shift();
    let tax = 0;

    let suitcase = widthSuitcase * heightSuitcase * depthSuitcase;

    if (suitcase <= 50) {
        tax = 0;
    } else if (suitcase > 50 && suitcase <= 100) {
        if (ticket == 'false') {
            tax = 25;
        } else {
            tax = 0;
        }
    } else if (suitcase > 100 && suitcase <= 200) {
        if (ticket == 'false') {
            tax = 50;
        } else {
            tax = 10;
        }
    } else if (suitcase > 200 && suitcase <= 300) {
        if (ticket == 'false') {
            tax = 100;
        } else {
            tax = 20;
        }
    }

    console.log(`Luggage tax: ${tax.toFixed(2)}`);
}

luggageTax([2, 5, 3, 'false']);
luggageTax([10, 4, 5, 'true']);
luggageTax([5, 4, 3, 'true']);
luggageTax([5, 7, 7, 'false']);