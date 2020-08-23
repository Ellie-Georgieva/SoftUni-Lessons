function poundsToDollars(britishPoundInput) {
    const britishPound = britishPoundInput;

    const dollars = (britishPound * 1.31).toFixed(3);
    console.log(dollars);
}

poundsToDollars(80);
poundsToDollars(39);