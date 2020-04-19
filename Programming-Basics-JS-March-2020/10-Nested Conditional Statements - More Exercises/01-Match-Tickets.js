function matchTickets(budget, category, people) {
    budget = +budget;
    people = +people;
    let transport;

    if (people <= 4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <=9) {
        transport = budget * 0.6;
    } else if (people >=10 && people <= 24) {
        transport = budget * 0.5;
    } else if (people >= 25 && people <= 49) {
        transport = budget * 0.4;
    } else if (people >= 50) {
        transport = budget * 0.25;
    }

    let ticketMoney = (budget - transport);
    
    if (category == 'VIP') {
        let tickets = 499.99 * people;
        if (ticketMoney >= tickets) {
            let diff = ticketMoney - tickets;
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else if (ticketMoney < tickets) {
            let diff = tickets - ticketMoney;
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    } else if (category == 'Normal') {
        let tickets = 249.99 * people;
        if (ticketMoney >= tickets) {
            let diff = ticketMoney - tickets;
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        } else if (ticketMoney < tickets) {
            let diff = tickets - ticketMoney;
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        }
    }
}

matchTickets(1000, 'Normal', 1);
matchTickets(30000, 'VIP', 49);