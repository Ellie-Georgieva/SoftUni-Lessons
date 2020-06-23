function easterLunch(arr) {
    let easterBreadNum = Number(arr.shift());
    let eggsNum = Number(arr.shift());
    let cookiesKg = Number(arr.shift());

    let easterBread = easterBreadNum * 3.20;
    let eggs = eggsNum * 4.35;
    let cookies = cookiesKg * 5.40;
    let paintForEggs = eggsNum * 12 * 0.15;
    let price = easterBread + eggs + cookies + paintForEggs;

    console.log(price.toFixed(2));
}

easterLunch([3, 2, 3]);
easterLunch([4, 4, 3]);
easterLunch([2, 3, 2]);