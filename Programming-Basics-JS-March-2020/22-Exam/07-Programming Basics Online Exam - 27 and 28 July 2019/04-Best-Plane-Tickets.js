function bestPlaneTickets(arr) {
    let flightNumber = arr.shift();
    let stayMin = Number.POSITIVE_INFINITY;
    let flight = ''
    let priceFlight = 0;
    
    while (flightNumber != 'End') {
        let price = Number(arr.shift());
        let stay = Number(arr.shift());

        if (stayMin > stay) {
            stayMin = stay;
            flight = flightNumber;
            priceFlight = price;
        }

        flightNumber = arr.shift();
    }
    
    let priceLv = priceFlight * 1.96;
    let hours = Math.trunc(stayMin / 60);
    let minutes = stayMin % 60;
    console.log(`Ticket found for flight ${flight} costs ${priceLv.toFixed(2)} leva with ${hours}h ${minutes}m stay`);    
}

bestPlaneTickets(['W64301', 60, 140, 'FR9967', 80, 200, 'FR0066', 45, 60, 'End']);
bestPlaneTickets(['W64301', 60, 140, 'W30510', 110, 40, 'W51440', 160, 70, 'FR0066', 75, 75, 'End']);
bestPlaneTickets(['W43122', 30, 120, 'W35400', 30, 100, 'End']);