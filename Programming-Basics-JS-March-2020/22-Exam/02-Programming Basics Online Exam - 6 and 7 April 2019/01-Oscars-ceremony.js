function oscarsCeremony(arr) {
    let hall = Number(arr.shift());

    let oscars = hall - (0.30 * hall);
    let catering = oscars - (0.15 * oscars);
    let soundSystem = catering / 2;
    let total = hall + oscars + catering + soundSystem;

    console.log(total.toFixed(2));
}

oscarsCeremony([3500]);
oscarsCeremony([5555]);