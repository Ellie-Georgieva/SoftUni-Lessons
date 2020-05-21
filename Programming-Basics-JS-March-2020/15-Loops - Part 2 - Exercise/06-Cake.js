function cake(arr) {
    let width = Number(arr.shift());
    let length = Number(arr.shift());
    let cakeSize = width * length;
    let pieces = 0;

    while (true) {
        let cakePiece = arr.shift();
        
        if (cakePiece == 'STOP') {
            console.log(`${cakeSize} pieces are left.`);
            break;
        }

        cakeSize -= +cakePiece;
        pieces += cakePiece;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            break;
        }
    }
}

cake([10, 10, 20, 20, 20, 20, 21]);
cake([10, 2, 2, 4, 6, 'STOP']);