function mobileOperator(arr) {
    let contractDuration = arr.shift();
    let contractType = arr.shift();
    let mobileInternet = arr.shift();
    let months = Number(arr.shift());
    let price = 0;

    if (contractType == 'Small') {
        if (contractDuration == 'one') {
            price = 9.98 * months;
        } else if (contractDuration == 'two') {
            price = 8.58 * months;
        }
        if (mobileInternet == 'yes') {
            price += (months * 5.50);
        }
    } else if (contractType == 'Middle') {
        if (contractDuration == 'one') {
            price = 18.99 * months;
        } else if (contractDuration == 'two') {
            price = 17.09 * months;
        }
        if (mobileInternet == 'yes') {
            price += (months * 4.35);
        }
    } else if (contractType == 'Large') {
        if (contractDuration == 'one') {
            price = 25.98 * months;
        } else if (contractDuration == 'two') {
            price = 23.59 * months;
        }
        if (mobileInternet == 'yes') {
            price += (months * 4.35);
        }
    } else if (contractType == 'ExtraLarge') {
        if (contractDuration == 'one') {
            price = 35.99 * months;
        } else if (contractDuration == 'two') {
            price = 31.79 * months;
        }
        if (mobileInternet == 'yes') {
            price += (months * 3.85);
        }
    }

    if (contractDuration == 'two') {
        price -= (price * 0.0375);
    }

    console.log(`${price.toFixed(2)} lv.`);
}

mobileOperator(['one', 'Small', 'yes', '10']);
mobileOperator(['two', 'Large', 'no', '10']);
mobileOperator(['two', 'ExtraLarge', 'yes', '20']);
mobileOperator(['two', 'Small', 'yes', '20']);