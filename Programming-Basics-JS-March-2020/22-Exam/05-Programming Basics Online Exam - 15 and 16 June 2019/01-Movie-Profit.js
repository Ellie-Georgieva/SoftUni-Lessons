function movieProfit(arr) {
    let movie = arr.shift();
    let daysNum = Number(arr.shift());
    let ticketsNum = Number(arr.shift());
    let ticketPrice = Number(arr.shift());
    let cinemaPercentage = Number(arr.shift());

    let profit = daysNum * (ticketPrice * ticketsNum);
    let totalProfit = profit - (profit * cinemaPercentage) / 100;

    console.log(`The profit from the movie ${movie} is ${totalProfit.toFixed(2)} lv.`);
}

movieProfit(['The Programmer', 20, 500, 7.50, 7]);
movieProfit(['Python Basics', 40, 34785, 10.45, 14]);
movieProfit(['The Jungle', 22, 20500, 9.37, 30]);