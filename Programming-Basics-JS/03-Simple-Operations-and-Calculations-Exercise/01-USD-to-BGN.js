function usdToBGN(usd) {
    usd = Number(usd)
    let lev = (usd * 1.79549).toFixed(2);
    console.log(lev);
}

usdToBGN(20);
usdToBGN(100);
usdToBGN(12.5);