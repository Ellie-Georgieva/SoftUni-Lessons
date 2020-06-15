function gymnastics(arr) {
    let country = arr.shift();
    let type = arr.shift();
    let points = 0;

    if (country == 'Russia') {
        if (type == 'ribbon') {
            points = 9.100 + 9.400;
        } else if (type == 'hoop') {
            points = 9.300 + 9.800;
        } else if (type == 'rope') {
            points = 9.600 + 9.000;
        }
    } else if (country == 'Bulgaria') {
        if (type == 'ribbon') {
            points = 9.600 + 9.400;
        } else if (type == 'hoop') {
            points = 9.550 + 9.750;
        } else if (type == 'rope') {
            points = 9.500 + 9.400;
        }
    } else if (country == 'Italy') {
        if (type == 'ribbon') {
            points = 9.200 + 9.500;
        } else if (type == 'hoop') {
            points = 9.450 + 9.350;
        } else if (type == 'rope') {
            points = 9.700 + 9.150;
        }
    }

    let percentage = ((20 - points) / 20) * 100;

    console.log(`The team of ${country} get ${points.toFixed(3)} on ${type}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(['Bulgaria', 'ribbon']);
gymnastics(['Russia', 'rope']);
gymnastics(['Italy', 'hoop']);