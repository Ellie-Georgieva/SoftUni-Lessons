function RadiansToDegrees(radians) {
    radians = Number(radians)
    let degrees = (radians * 180 / Math.PI).toFixed(0);
    console.log(degrees);
}

RadiansToDegrees(3.1416);
RadiansToDegrees(6.2832);
RadiansToDegrees(0.7854);
RadiansToDegrees(0.5236);