function easterParty(arr) {
    let guests = Number(arr.shift());
    let envelope = Number(arr.shift());
    let budget = Number(arr.shift());

    if (guests >= 10 && guests <= 15) {
        envelope -= (envelope * 0.15);
    } else if (guests >= 16 && guests <= 20) {
        envelope -= (envelope * 0.2);
    } else if (guests >= 21) {
        envelope -= (envelope * 0.25);
    }

    let cake = budget * 0.10;
    let price = cake + (guests * envelope);

    if (budget >= price) {
        let diff = budget - price;
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = price - budget;
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}

easterParty(18, 30, 450);
easterParty(8, 25, 340);
easterParty(24, 35, 550);