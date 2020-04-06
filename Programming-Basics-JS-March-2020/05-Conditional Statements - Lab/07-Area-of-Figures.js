function areaOfFigures(figure, aSide, bSide) {
    aSide = Number(aSide);
    bSide = Number(bSide);

    if (figure == 'square') {
        let area = (aSide * aSide).toFixed(3);
        console.log(area);
    } else if (figure == 'rectangle') {
        let area = (aSide * bSide).toFixed(3);
        console.log(area);
    } else if (figure == 'circle') {
        let area = (Math.PI * (aSide * aSide)).toFixed(3);
        console.log(area);
    } else if (figure == 'triangle') {
        let area = ((aSide * bSide) / 2).toFixed(3);
        console.log(area);
    }
}

areaOfFigures('square', 5);
areaOfFigures('rectangle', 7, 2.5);
areaOfFigures('circle', 6);
areaOfFigures('triangle', 4.5, 20);