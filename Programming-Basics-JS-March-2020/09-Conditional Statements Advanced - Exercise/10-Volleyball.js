function volleyball(year, holidays, hometown) {
    holidays = Number(holidays);
    hometown = Number(hometown);
   
    let weekendsSofia = 48 - hometown;
    let gamesSofia = weekendsSofia * (3.0 / 4);
    let gamesHolidays = holidays * (2.0 / 3);
    let totalGames = hometown + gamesSofia + gamesHolidays;

    if (year == 'leap') {
        let games = totalGames + (totalGames * 0.15);
        console.log(Math.floor(games));
    } else {
        console.log(Math.floor(totalGames));
    }
} 

volleyball('leap', 5, 2);
volleyball('normal', 3, 2);
volleyball('leap', 2, 3);
volleyball('normal', 11, 6);
volleyball('leap', 0, 1);
volleyball('normal', 6, 13);