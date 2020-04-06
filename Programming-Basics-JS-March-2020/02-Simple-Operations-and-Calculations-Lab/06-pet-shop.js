function petShop(dogs, animals) {
    let dogPrice = dogs * 2.50;
    let animalsPrice = animals * 4;
    let sum = (dogPrice + animalsPrice).toFixed(2);
    console.log(sum + " lv.");
}

petShop(13, 9);