function triangleArea(firstSideInput, secondSideInput, thirdSideInput) {
    let a = firstSideInput;
    let b = secondSideInput;
    let c = thirdSideInput;

    let semiPerimeter = (a + b + c) / 2;
    let areaTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(areaTriangle);
}

triangleArea(2, 3.5, 4);