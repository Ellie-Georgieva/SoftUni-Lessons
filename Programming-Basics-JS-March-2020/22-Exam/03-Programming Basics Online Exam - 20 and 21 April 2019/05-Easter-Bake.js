function еasterBake(arr) {
    let easterBread = Number(arr.shift());
    let sugarMax = 0;
    let flourMax = 0;
    let totalSugar = 0;
    let totalFlour = 0;

    for (let i = 1; i <= easterBread; i++) {
        let sugar = Number(arr.shift());
        let flour = Number(arr.shift());

        if (sugar > sugarMax) {
            sugarMax = sugar;
        }
        if (flour > flourMax) {
            flourMax = flour;
        }

        totalFlour += flour;
        totalSugar += sugar;     
    }

    let sugarPackage = Math.ceil(totalSugar / 950);
    let flourPackage = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPackage}`);
    console.log(`Flour: ${flourPackage}`);
    console.log(`Max used flour is ${flourMax} grams, max used sugar is ${sugarMax} grams.`);
}

еasterBake([3, 400, 350, 250, 300, 450, 380]);
еasterBake([4, 500, 350, 560, 430, 600, 345, 578, 543]);