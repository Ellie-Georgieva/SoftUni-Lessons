function printDNA(numInput) {
    let dnaLength = numInput;
    let sequence = 'ATCGTTAGGG';
    let counter = -1;
    let elementCounter = 0;

    let element = (sequenceInput) => {
        let sequence = sequenceInput;
        let currentElement = 0;
        counter++;
        
      if (counter >= sequence.length) {
        counter = 0;
      }

      return sequence[currentElement + counter];
    }

    let firstRow = `**${element(sequence)}${element(sequence)}**`;
    let seconRow = `*${element(sequence)}--${element(sequence)}*`;
    let thirdRow = `${element(sequence)}----${element(sequence)}`;
    let fourthRow = `*${element(sequence)}--${element(sequence)}*`;

    for (let i = 0; i < dnaLength; i++) {
        let dna = [];
        dna.push(firstRow);
        dna.push(seconRow);
        dna.push(thirdRow);
        dna.push(fourthRow);

        console.log(dna[elementCounter]);

        elementCounter++;
        
        if (elementCounter == 4) {
            elementCounter = 0;
            firstRow = `**${element(sequence)}${element(sequence)}**`;
            seconRow = `*${element(sequence)}--${element(sequence)}*`;
            thirdRow = `${element(sequence)}----${element(sequence)}`;
            fourthRow = `*${element(sequence)}--${element(sequence)}*`;
        }
    }
}

printDNA(4);
printDNA(10);