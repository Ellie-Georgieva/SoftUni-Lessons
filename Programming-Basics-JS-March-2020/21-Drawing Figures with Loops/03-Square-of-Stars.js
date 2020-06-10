function squareOfStars(arr) {
    let n = Number(arr.shift());
    
    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let a = 1; a <= n; a++) {
            stars += '* ';
        }
        console.log(stars);
    }
}

squareOfStars([2]);
squareOfStars([3]);
squareOfStars([4]);