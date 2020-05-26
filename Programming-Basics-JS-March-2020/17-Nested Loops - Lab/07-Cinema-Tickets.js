function cinemaTickets(arr) {
    let movie = arr.shift();
    let student = 0;
    let kid = 0;
    let standard = 0;
    let totalTickets = 0;

    while (movie !== 'Finish') {
        let hall = Number(arr.shift());
        let ticketsType = arr.shift();

        while (ticketsType !== 'End') {
        
            if (ticketsType === 'standard') {
                standard++;
                totalTickets++;
            } else if (ticketsType === 'kid') {
                kid++;
                totalTickets++
            } else if (ticketsType === 'student') {
                student++;
                totalTickets++;
            } 

            if (totalTickets >= hall) {
                break;
            }

            ticketsType = arr.shift();
        }

        let hallPercent = (totalTickets / hall) * 100;
        console.log(`${movie} - ${hallPercent.toFixed(2)}% full.`);
        totalTickets = 0;

        movie = arr.shift();
    }

    let allTickets = student + kid + standard;
    let standardPercent = (standard / allTickets) * 100;
    let studentPercent = (student / allTickets) * 100;
    let kidPercent = (kid / allTickets) * 100;

    console.log(`Total tickets: ${allTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Taxi', 10, 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', 6, 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);
cinemaTickets(['The Matrix', 20, 'student', 'standard', 'kid', 'kid', 'student', 'student', 'standard', 'student', 'End', 'The Green Mile', 17, 'student', 'standard', 'standard', 'student', 'standard', 'student', 'End', 'Amadeus', 3, 'standard', 'standard', 'standard', 'Finish']);