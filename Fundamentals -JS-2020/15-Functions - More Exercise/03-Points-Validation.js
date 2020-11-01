function pointsValidation(arrInput) {
    let points = arrInput.slice();
    const x1 = arrInput.shift();
    const y1 = arrInput.shift();
    const x2 = arrInput.shift();
    const y2 = arrInput.shift();

    let distanceBetweenPoints = (x1Input, y1Input, x2Input, y2Input) => {
        const x1 = x1Input;
        const y1 = y1Input;
        const x2 = x2Input;
        const y2 = y2Input;
    
        const a = Math.abs(x1 - x2);
        const b = Math.abs(y1 - y2);
    
        return Number.isInteger(Math.sqrt((a * a) + (b * b)));
    }

    let firstValidation = distanceBetweenPoints(x1, y1, 0, 0);
    let secondValidation = distanceBetweenPoints(x2, y2, 0, 0);
    let thirdValidation = distanceBetweenPoints(x1, y1, x2, y2);   

    if (firstValidation) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondValidation) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdValidation) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);