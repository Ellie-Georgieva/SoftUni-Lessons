function shopping(arr) {
    let budget = Number(arr.shift());
    let videoCardsNum = Number(arr.shift());
    let processorsNum = Number(arr.shift());
    let ramMemoryNum = Number(arr.shift());

    let videoCardsPrice = videoCardsNum * 250;
    let processorsPrice = (videoCardsPrice * 0.35) * processorsNum;
    let ramMemoryPrice = (videoCardsPrice * 0.1) * ramMemoryNum;
    let totalPrice = videoCardsPrice + processorsPrice + ramMemoryPrice;

    if (videoCardsNum > processorsNum) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    if (budget >= totalPrice) {
        let diff = budget - totalPrice;
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        diff = totalPrice - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shopping([900, 2, 1, 3]);
shopping([920.45, 3, 1, 1]);