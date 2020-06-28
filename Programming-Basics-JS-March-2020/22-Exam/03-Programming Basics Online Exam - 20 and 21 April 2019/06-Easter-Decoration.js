function easterDecoration(arr) {
    let customersNum = Number(arr.shift());
    let totalPrice = 0;
    let totalProductNum = 0;

    for (let i = 1; i <= customersNum; i++) {
        let product = arr.shift();
        let productNum = 0;
        let price = 0;

        while (product != 'Finish') {

            if (product == 'basket') {
                price += 1.5;
            } else if (product == 'wreath') {
                price += 3.8;
            } else if (product == 'chocolate bunny') {
                price += 7;
            } 

            product = arr.shift(); 
            productNum++;   
        }

        if (productNum % 2 == 0) {
            price -= (price * 0.2);
        }

        totalPrice += price;
        totalProductNum += productNum;
        console.log(`You purchased ${productNum} items for ${price.toFixed(2)} leva.`);
    }

    let average = totalPrice / customersNum;
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`);
}

easterDecoration(['2', 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish']);
easterDecoration(['1', 'basket', 'wreath', 'chocolate bunny', 'wreath', 'basket', 'chocolate bunny', 'Finish']);