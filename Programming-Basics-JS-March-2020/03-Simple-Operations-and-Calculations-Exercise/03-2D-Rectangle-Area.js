function rectangleArea(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = (length * width).toFixed(2);
    let perimeter = (2 * (length + width)).toFixed(2);
    console.log(area);
    console.log(perimeter);
}

rectangleArea(60, 20, 10, 50);
rectangleArea(30, 40, 70, -10);
rectangleArea(600.25, 500.75, 100.50, -200.5);