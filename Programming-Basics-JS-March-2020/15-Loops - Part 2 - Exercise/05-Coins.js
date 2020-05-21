function coins(arr) {
    let coins = Number(arr.shift()) * 100;
    let numberCoins = 0

    while (200 <= coins) {
        coins -= 200; 
        numberCoins += 1;
    }
    while (100 <= coins) {
        coins -= 100; 
        numberCoins += 1;
    }
    while (50 <= coins) {
        coins -= 50; 
        numberCoins += 1;
    }
    while (20 <= coins) {
        coins -= 20; 
        numberCoins += 1;
    }
    while (10 <= coins) {
        coins -= 10; 
        numberCoins += 1;
    }
    while (5 <= coins) {
        coins -= 5; 
        numberCoins += 1;
    }
    while (2 <= coins) {
        coins -= 2; 
        numberCoins += 1;
    }
    while (1 <= coins) {
        coins -= 1; 
        numberCoins += 1;
    }

    console.log(numberCoins);
} 

coins([6]);
coins([1.23]);
coins([2]);
coins([0.56]);
coins([2.73]);