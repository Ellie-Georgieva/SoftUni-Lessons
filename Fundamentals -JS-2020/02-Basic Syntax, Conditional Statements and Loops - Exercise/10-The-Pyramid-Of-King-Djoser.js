function thePyramidOfKingDjoser(baseInput, incrementInput) {
    let base = baseInput;
    const increment = incrementInput;
    const stepsNum = Math.ceil(base / 2);
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;

    for (let i = 1; i <= stepsNum; i++) {

        if (i != stepsNum) {
        let stoneStep = ((base - 2) * (base - 2)) * increment;
        stone += stoneStep
        }

        if (i == stepsNum) {
            gold = (base * base) * increment;
        } else if (i % 5 == 0) {
            let lazuliStep = ((4 * base) - 4) * increment; 
            lazuli += lazuliStep;
        } else {
            let marbleStep = ((4 * base) - 4) * increment;
            marble += marbleStep;
        }

        base -= 2;
    }

    let totalHeight = Math.floor(stepsNum * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);