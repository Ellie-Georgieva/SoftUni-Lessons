function moving(arr) {
    let width = Number(arr.shift());
    let length = Number(arr.shift());
    let height = Number(arr.shift());
    let freeSpace = width * length * height;
    let occupiedSpace = 0; 
    let carton = arr.shift();
    
    while (occupiedSpace <= freeSpace) {
            if (carton == 'Done') {
                let spaceLeft = freeSpace - occupiedSpace;
                console.log(`${spaceLeft} Cubic meters left.`)
                break;
            } else {
                occupiedSpace += +carton;
                carton = arr.shift();
            }        
    }
    if (occupiedSpace > freeSpace) {
        let diff = occupiedSpace - freeSpace;
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}

moving([10, 10, 2, 20, 20, 20, 20, 122]);
moving([10, 1, 2, 4, 6, 'Done']);