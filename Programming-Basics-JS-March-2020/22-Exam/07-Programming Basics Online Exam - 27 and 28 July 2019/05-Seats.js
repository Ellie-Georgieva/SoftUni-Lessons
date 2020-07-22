function seats(arr) {
    let ticketNum = Number(arr.shift());
    let seat = ''

    for (let i = 1; i <= ticketNum; i++) {
        let ticket = arr.shift();

        if (ticket.length == 4) {
            let symbol = ticket.charCodeAt(0);
            
            if (symbol >= 65 && symbol <= 90) {
                seat = ticket[0] + ticket[1] + ticket[2];
            } else {
                seat = ticket[3] + ticket[1] + ticket[2];
            }

        } else if (ticket.length == 5 || ticket.length == 6) {
            seat = ticket[0] + ticket.charCodeAt(1);
        }

        console.log(`Seat decoded: ${seat}`);
    }
}

seats([3, '042W', 'W981', 'W24578']);
seats([4, 'Y456', 'Y8909', 'Y8976', 'L3472']);