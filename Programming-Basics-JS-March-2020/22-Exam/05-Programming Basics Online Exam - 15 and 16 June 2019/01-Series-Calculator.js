function seriesCalculator(arr) {
    let seriesTitle = arr.shift();
    let seasonsNum = Number(arr.shift());
    let episodesNum = Number(arr.shift());
    let duration = Number(arr.shift());

    let durationAds = duration + (duration * 0.2);
    let extraMin = seasonsNum * 10;
    let totalDuration = (seasonsNum * episodesNum * durationAds) + extraMin;

    console.log(`Total time needed to watch the ${seriesTitle} series is ${Math.floor(totalDuration)} minutes.`);
}

seriesCalculator(['Lucifer', 3, 18, 55]);
seriesCalculator(['Game of Thrones', 7, 10, 50]);
seriesCalculator(['Riverdale', 3, 21, 45]);