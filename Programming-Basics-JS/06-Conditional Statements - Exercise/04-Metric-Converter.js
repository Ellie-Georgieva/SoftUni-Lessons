function metricConverter(num, unitIn, unitOut) {
    num = Number(num);
  
    if (unitIn == 'mm' && unitOut == 'cm') {
        let conversion = (num / 10).toFixed(3);
        console.log(conversion);
    } else if (unitIn == 'cm' && unitOut == 'm') {
        let conversion = (num / 100).toFixed(3);
        console.log(conversion);
    } else if (unitIn == 'mm' && unitOut == 'm') {
        let conversion = (num / 1000).toFixed(3);
        console.log(conversion);
    } else if (unitIn == 'cm' && unitOut == 'mm') {
        let conversion = (num * 10).toFixed(3);
        console.log(conversion); 
    } else if (unitIn == 'm' && unitOut == 'cm') {
        let conversion = (num * 100).toFixed(3);
        console.log(conversion); 
    } else if (unitIn == 'm' && unitOut == 'mm') {
        let conversion = (num * 1000).toFixed(3);
        console.log(conversion); 
    }
}

metricConverter(12, 'mm', 'm');
metricConverter(150, 'm', 'cm');
metricConverter(45, 'cm', 'mm');