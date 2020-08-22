function convertMetersToKilometres(metersInput) {
    const meters = metersInput;

    let kilometers = (meters / 1000).toFixed(2);
    console.log(kilometers);
}

convertMetersToKilometres(1852);
convertMetersToKilometres(798);