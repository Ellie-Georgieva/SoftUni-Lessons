function WeatherForecastPart2 (gradus) {
    if (gradus >= 26.00 && gradus <= 35.00) {
        console.log("Hot");
    } else if (gradus >= 20.1 && gradus <= 25.9) {
        console.log("Warm");
    } else if (gradus >= 15.00 && gradus <= 20.00) {
        console.log("Mild");
    } else if (gradus >= 12.00 && gradus <= 14.9) {
        console.log("Cool")
    } else if (gradus >= 5.00 && gradus <= 11.9) {
        console.log("Cold");
    }   else {
     console.log("unknown");
    }
}
WeatherForecastPart2 (24);
WeatherForecastPart2 (17);
WeatherForecastPart2 (101);
WeatherForecastPart2 (32);
WeatherForecastPart2 (11.9);