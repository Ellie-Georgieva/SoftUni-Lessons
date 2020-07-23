function tripExpenses(arr) {
    let days = Number(arr.shift());
    let limit = 60;

    for (let i = 1; i <= days; i++) {
        let product = arr.shift();
        let buy = 0;

        while (product != 'Day over') {
            product = Number(product);

            if (limit - product < 0) {
                if (limit > 0) {
                    product = arr.shift();
                    continue;
                }
            } else {
                limit -= product;
                buy++;
            }

            if (limit <= 0) {
                console.log(`Daily limit exceeded! You've bought ${buy} products.`);
                limit = 60;
                break;
            }

            product = arr.shift();
    
            if (product == 'Day over' && limit > 0) {
                console.log(`Money left from today: ${limit.toFixed(2)}. You've bought ${buy} products.`);
                limit += 60;
            }
        }

        if (product == 'Day over' && limit == 60) {
            console.log(`Money left from today: ${limit.toFixed(2)}. You've bought ${buy} products.`);
            limit += 60;
        }
    }
}

tripExpenses([3, 20, 40, 40, 15, 'Day over', 15, 5, 10, 17, 10, 'Day over']);
tripExpenses([2, 'Day over', 100, 20]);
tripExpenses([2, 'Day over', 130, 100, 40, 20]);