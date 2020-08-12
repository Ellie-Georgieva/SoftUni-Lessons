function distanceBetweenPoints(x1Input, y1Input, x2Input, y2Input) {
    const x1 = x1Input;
    const y1 = y1Input;
    const x2 = x2Input;
    const y2 = y2Input;

    const a = Math.abs(x1 - x2);
    const b = Math.abs(y1 - y2);

    console.log(Math.sqrt((a * a) + (b * b)));
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);