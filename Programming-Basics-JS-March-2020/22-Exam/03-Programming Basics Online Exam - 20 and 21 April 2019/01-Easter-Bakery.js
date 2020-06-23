function easterBakery(arr) {
    let flourKgPrice = Number(arr.shift());
    let flourKg = Number(arr.shift());
    let sugarKg = Number(arr.shift());
    let eggsNum = Number(arr.shift());
    let yeastNum = Number(arr.shift());

    let flour = flourKg * flourKgPrice;
    let sugarKgPrice = flourKgPrice - (flourKgPrice * 0.25);
    let sugar = sugarKg * sugarKgPrice;
    let eggsPrice = flourKgPrice + (flourKgPrice * 0.1);
    let eggs = eggsNum * eggsPrice;
    let yeastPrice = sugarKgPrice - (sugarKgPrice * 0.8);
    let yeast = yeastNum * yeastPrice;

    let totalPrice = flour + sugar + eggs + yeast;
    console.log(totalPrice.toFixed(2));
}

easterBakery(['50', '10', '3.5', '6', '1']);
easterBakery(['63.44', '3.57', '6.35', '8', '2']);