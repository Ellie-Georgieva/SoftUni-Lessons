function celsiusToFahrenheit(celsius) {
    celsius = Number(celsius);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(25);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-5.5);
celsiusToFahrenheit(32.3);