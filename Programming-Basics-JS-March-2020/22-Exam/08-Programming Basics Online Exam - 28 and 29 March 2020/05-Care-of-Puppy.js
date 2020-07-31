function careOfPuppy(arr) {
    let boughtFood = +arr.shift() * 1000;
    let eatenFood = arr.shift();  
    let totalEaten = 0;
    
    while (eatenFood != 'Adopted') {
        totalEaten += Number(eatenFood);  
        eatenFood = arr.shift();
    }

    if (boughtFood >= totalEaten) {
        let diff = boughtFood - totalEaten;
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        diff = totalEaten - boughtFood;
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}

careOfPuppy([4, 130, 345, 400, 180, 230, 120, 'Adopted']);
careOfPuppy([3, 1000, 1000, 1000, 'Adopted']);
careOfPuppy([2, 999,  456, 999, 999, 123, 456, 'Adopted']);