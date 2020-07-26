function changeBureau(arr) {
    let peterBitcoins = +arr.shift();
    let peterUna = +arr.shift();
    let commission = +arr.shift();
    let bitcoinsLv = peterBitcoins * 1168;
    let unaLv = (peterUna * 0.15) * 1.76;
    let totalLv = unaLv + bitcoinsLv;
    let totalEuro = totalLv / 1.95;
    let euro = totalEuro - (totalEuro * commission) / 100; 

    console.log(euro.toFixed(2));
}

changeBureau([1, 5, 5]);
changeBureau([20, 5678, 2.4]);
changeBureau([7, 50200.12, 3]);