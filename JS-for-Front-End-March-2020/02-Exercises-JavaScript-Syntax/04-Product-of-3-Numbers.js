function productOf3Numbers(args) {
    let negativeCount = 0;
    for(let i = 0; i < args.length; i++) {
        if (args[i] == 0) {
            console.log('Positive');
            return;
        }
        if (args[i] < 0)
            negativeCount++;
    }
    console.log(negativeCount % 2 == 0 ? 'Positive' : 'Negative');
}
productOf3Numbers([2, 3, -1]);
productOf3Numbers([5, 4, 3]);
productOf3Numbers([-3, -4, 5]);
