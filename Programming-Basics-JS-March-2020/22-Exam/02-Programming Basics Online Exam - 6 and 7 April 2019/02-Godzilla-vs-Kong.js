function godzillaVsKong(arr) {
    let budget = Number(arr.shift());
    let extras = Number(arr.shift());
    let clothes = Number(arr.shift());
 
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
 
 godzillaVsKong([20000, 120, 55.5]);
 godzillaVsKong([15437.62, 186, 57.99]);
 godzillaVsKong([9587.88, 222, 55.68]);