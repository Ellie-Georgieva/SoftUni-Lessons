function bills(arr) {
    let period = Number(arr.shift());
    let waterBill = 20;
    let internetBill = 15;
    let otherBills = 0
    let totalElectricityBill = 0;
    let totalOtherBills = 0;

    for (let i = 1; i <= period; i++) {
        let electricityBill = Number(arr.shift());
        totalElectricityBill += electricityBill;
        otherBills = electricityBill + waterBill + internetBill;
        totalOtherBills += otherBills + (otherBills * 0.2);
    }

    let totalWaterBill = 20 * period;
    let totalInternetBill = 15 * period;
    let average = (totalElectricityBill + totalWaterBill + totalInternetBill + totalOtherBills) / period;

    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterBill.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetBill.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherBills.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);