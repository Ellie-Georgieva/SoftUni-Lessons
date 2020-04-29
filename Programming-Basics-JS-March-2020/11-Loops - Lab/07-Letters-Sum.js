function lettersSum(product, number, budget) {
    number = Number(number);
    budget = Number(budget);
    let sum = 0;

    for (let i = 0; i < product.length; i++) {
        let letter = product[i];

        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                sum += 3;
                break;
            default:
                sum += 1;
                break;
        }   
    }

    let price = sum * number;

    if (budget < price) {
        console.log(`Cannot buy ${product}. Product value: ${price.toFixed(2)}`);
    } else {
        let diff = budget - price;
        console.log(`${product} bought. Money left: ${diff.toFixed(2)}`)
    }
}

lettersSum('apple', 2, 20);
lettersSum('milk', 1.4, 8);