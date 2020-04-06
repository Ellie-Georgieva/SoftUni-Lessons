function sleepyTomCat(holidays) {
    holidays = Number(holidays);
    let workDays = 365 - holidays;
    let minutePlay = (holidays * 127) + (workDays * 63);
  
    
    if (minutePlay > 30000) {
        let hours = (minutePlay - 30000) / 60;
        let hours2 = Math.floor(hours);
        let minutes = (hours - hours2) * 60;
        console.log('Tom will run away')
        console.log(`${hours2} hours and ${minutes.toFixed(0)} minutes more for play`)
    } else if (minutePlay <= 30000) {
        let hours = (30000 - minutePlay) / 60;
        let hours2 = Math.floor(hours);
        let minutes = (hours - hours2) * 60;
        console.log('Tom sleeps well')
        console.log(`${hours2} hours and ${minutes.toFixed(0)} minutes less for play`)
    }
}
sleepyTomCat(20);
sleepyTomCat(113);