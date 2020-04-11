function tradeCommissions(city, sales) {
    sales = Number(sales);
    let commissions = 0;

    if (sales >= 0 && sales <= 500) {
        if (city == 'Sofia') {
            commissions = (0.05 * sales).toFixed(2);
        } else if (city == 'Varna') {
            commissions = (0.045 * sales).toFixed(2);
        } else if (city == 'Plovdiv') {
            commissions = (0.055 * sales).toFixed(2);
        } 
    } else if (sales > 500 && sales <= 1000) {
        if (city == 'Sofia') {
            commissions = (0.07 * sales).toFixed(2);
        } else if (city == 'Varna') {
            commissions = (0.075 * sales).toFixed(2);
        } else if (city == 'Plovdiv') {
            commissions = (0.08 * sales).toFixed(2);
        } 
    } else if (sales > 1000 && sales <= 10000) {
        if (city == 'Sofia') {
            commissions = (0.08 * sales).toFixed(2);
        } else if (city == 'Varna') {
            commissions = (0.1 * sales).toFixed(2);
        } else if (city == 'Plovdiv') {
            commissions = (0.12 * sales).toFixed(2);
        } 
    } else if (sales > 10000) {
        if (city == 'Sofia') {
            commissions = (0.12 * sales).toFixed(2);
        } else if (city == 'Varna') {
            commissions = (0.13 * sales).toFixed(2);
        } else if (city == 'Plovdiv') {
            commissions = (0.145 * sales).toFixed(2);
        } 
    }

    if (commissions != 0) {
        console.log(commissions);
    } else if (commissions === 0) {
        console.log('error');
    }
}

tradeCommissions('Sofia', 1500);
tradeCommissions('Plovdiv', 499.99);
tradeCommissions('Varna', 3874.50);
tradeCommissions('Kaspichan', -50);