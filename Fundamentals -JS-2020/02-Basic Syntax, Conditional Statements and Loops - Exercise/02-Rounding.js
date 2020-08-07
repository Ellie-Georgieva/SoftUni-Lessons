function rounding(numInput, precisionInput) {
    let num = +numInput;
    let precision = +precisionInput;

    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(num.toFixed(precision)));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);