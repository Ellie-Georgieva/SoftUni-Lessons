//short version

function godzillaVsKong(budget, extras, clothes) {
    budget = Number(budget);
    extras = Number(extras);
    clothes = Number(clothes);
 
    let decor = 0.10 * budget;
    let budgetClothes = (extras * clothes);
   
 
    if (extras > 150) {
        budgetClothes = budgetClothes - (0.1 * budgetClothes);
    }
    
    let needMoney = decor + budgetClothes;
 
   
    if (needMoney <= budget) {
            let difference = budget - needMoney;
            console.log('Action!');
            console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    } else {
            let difference = needMoney - budget;
            console.log('Not enough money!');
            console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
        } 
 }
 
 godzillaVsKong(20000, 120, 55.5);
 godzillaVsKong(15437.62, 186, 57.99);
 godzillaVsKong(9587.88, 222, 55.68);


 //long version


function godzillaVsKong(budget, extras, clothes) {
    budget = Number(budget);
    extras = Number(extras);
    clothes = Number(clothes);

    let decor = 0.10 * budget;
    let budgetClothes = (extras * clothes);
    let discount = budgetClothes - (0.1 * budgetClothes);

    if (extras < 150) {
        let needMoney = decor + budgetClothes;
        if (needMoney <= budget) {
            let difference = budget - needMoney;
            console.log('Action!');
            console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
        } else {
            let difference = needMoney - budget;
            console.log('Not enough money!');
            console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
        } 
    } else {
        let needMoney = decor + discount;
        if (needMoney <= budget) {
            let difference = budget - needMoney;
            console.log('Action!');
            console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
        } else {
            let difference = needMoney - budget;
            console.log('Not enough money!');
            console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
        } 
    }
}

godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);