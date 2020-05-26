function building(arr) {
    let floors = Number(arr.shift());
    let rooms = Number(arr.shift());

    for (let i = floors; i >= 1; i--) {
        let floor = " ";
        if (i === floors) {
            for (l = 0; l < rooms; l++) {
                floor += `L${i}${l} `;
            }
        } else if (i % 2 === 0) {
            for (let o = 0; o < rooms; o++) {
                floor += `O${i}${o} `;
            }
        } else {
            for (let a = 0; a < rooms; a++) {
                floor += `A${i}${a} `;
            }
        }
        console.log(floor);
    }
}

building([6, 4]);
building([9, 5]);
building([4, 4]);