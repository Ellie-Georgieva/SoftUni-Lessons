function inches(number) {
    console.log(number * 2.54);
}

inches(5);


function metricConverter(...input) {
    let mesure = Number(input.shift());
    let from = input.shift();
    let to = input.shift();

    let formula = `${from} / ${to}`;

    calculatiоn = {
        'm/mm': 1000,
        'm/cm': 100,
        'cm/m': 0.01,
        'cm/mm': 10,
        'mm/m': 0.001,
        'mm/cm': 0.1
    };

    let result = mesure * calculatiоn[formula];
    console.log(result.toFixed(3));
}