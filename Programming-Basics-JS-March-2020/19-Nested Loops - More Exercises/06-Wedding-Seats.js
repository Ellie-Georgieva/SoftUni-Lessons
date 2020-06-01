function weddingSeats(arr) {
    let lastSector = (arr.shift()).charCodeAt();
    let firstSector = 65;
    let firstSectorRows = Number(arr.shift());
    let oddPlaces = Number(arr.shift()) + 97;
    let evenPlaces = oddPlaces + 2;
    let totalSeats = 0;

    for (let sector = firstSector; sector <= lastSector; sector++) {

        for (let row = 1; row <= firstSectorRows; row++) {

            if (row % 2 == 0) {
                
                for (place = 97; place < evenPlaces; place++) {
                    let seats = String.fromCharCode(sector) + row + String.fromCharCode(place);
                    totalSeats++;
                    console.log(seats);
                }
            } else {
                for (place = 97; place < oddPlaces; place++) {
                    let seats = String.fromCharCode(sector) + row + String.fromCharCode(place);
                    totalSeats++
                    console.log(seats);
                }
            }
        }

        firstSectorRows++;
    }
    
    console.log(totalSeats);
}

weddingSeats(['B', '3', '2']);
// weddingSeats(['C', '4', '2']);