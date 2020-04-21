function flowers(chrysanthemums, roses, tulips, season, type) {
    chrysanthemums = +chrysanthemums;
    roses = +roses; 
    tulips = +tulips;
    let chrysanthemumsPrice;
    let rosesPrice;
    let tulipsPrice;

    if (season == 'Spring' || season == 'Summer') {
        chrysanthemumsPrice = chrysanthemums * 2.00;
        rosesPrice = roses * 4.10;
        tulipsPrice = tulips * 2.50;
    } else if (season == 'Autumn' || season == 'Winter') {
        chrysanthemumsPrice = chrysanthemums * 3.75;
        rosesPrice = roses * 4.50;
        tulipsPrice = tulips * 4.15;
    }

    let bouquetPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;

    if (type == 'Y') {
        bouquetPrice = bouquetPrice + (bouquetPrice * 0.15)
    } 

    if (tulips > 7 && season == 'Spring') {
        bouquetPrice = bouquetPrice - (bouquetPrice * 0.05);
    } else if (roses >= 10 && season == 'Winter') {
        bouquetPrice = bouquetPrice - (bouquetPrice * 0.1);
    } 
    
    if ((chrysanthemums + tulips + roses) > 20) {
        bouquetPrice = bouquetPrice - (bouquetPrice * 0.2);
    }

    let totalPrice = bouquetPrice + 2;
    console.log(totalPrice.toFixed(2));
}

flowers(2, 4, 8, 'Spring', 'Y');
flowers(3, 10, 9, 'Winter', 'N');
flowers(10, 10, 10, 'Аutumn', 'N');