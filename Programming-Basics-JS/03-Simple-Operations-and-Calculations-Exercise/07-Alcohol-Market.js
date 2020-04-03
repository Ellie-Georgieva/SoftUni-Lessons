function alcoholMarket(whiskeyLv, beerLiters, wineLiters, rakiaLiters, whiskeyLiters) {
    whiskeyLv = Number(whiskeyLv)
    beerLiters = Number(beerLiters)
    wineLiters = Number(wineLiters)
    rakiaLiters = Number(rakiaLiters)
    whiskeyLiters = Number(whiskeyLiters)
    let rakiaLv = whiskeyLv / 2;
    let wineLv = rakiaLv - (0.4 * rakiaLv);
    let beerLv = rakiaLv - (0.8 * rakiaLv);
    let whiskeySum = whiskeyLv * whiskeyLiters;
    let wineSum = wineLv * wineLiters;
    let rakiaSum = rakiaLiters * rakiaLv;
    let beerSum = beerLv * beerLiters;
    let sum = (whiskeySum + wineSum + rakiaSum + beerSum).toFixed(2);
    console.log(sum);
}

alcoholMarket(50, 10, 3.5, 6.5, 1);
alcoholMarket(63.44, 3.57, 6.35, 8.15, 2.5);