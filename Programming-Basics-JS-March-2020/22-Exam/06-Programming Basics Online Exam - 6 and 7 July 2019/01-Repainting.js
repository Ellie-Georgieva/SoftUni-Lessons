function repainting(arr) {
    let nylonNeeded = Number(arr.shift());
    let paintNeeded = Number(arr.shift());
    let diluentNeeded = Number(arr.shift());
    let hoursWork = Number(arr.shift());

    let nylonPrice = (nylonNeeded + 2) * 1.50;
    let paintPrice = (paintNeeded + (paintNeeded * 0.1)) * 14.50;
    let diluentPrice = diluentNeeded * 5;
    let bags = 0.40;
    let materialsPrice = nylonPrice + paintPrice + diluentPrice + bags;
    let workersPay = (materialsPrice * 0.3) * hoursWork;
    let expenses = materialsPrice + workersPay;

    console.log(`Total expenses: ${expenses.toFixed(2)} lv.`);
}

repainting([10, 11, 4, 8]);
repainting([5, 10, 10, 1]);
repainting([90, 99, 28, 9]);