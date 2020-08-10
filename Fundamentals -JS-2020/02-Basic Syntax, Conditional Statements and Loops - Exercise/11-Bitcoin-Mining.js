function bitcoinMining(arr) {
    const bitcoinPrice = 11949.16;
    let money = 0;
    let bitcoin = 0;
    let day = 0;
    let shift = arr.length;

    for (let i = 0; i < shift; i++) {
        let gold = arr.shift();

        if ((i + 1) % 3 == 0 && i !=0)  {
            gold -= (gold * 0.3)
        }

        money += gold * 67.51;

        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoin++;

            if (bitcoin == 1) {
            day = i + 1;
            }
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoin}`);

    if (bitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100,200,300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);