function rhombusOfStars(arr) {
    let n = Number(arr.shift());
   
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + "* ".repeat(n - (n - i)));
    }
    for (let i = n - 1; i >= 1; i--) {
        console.log(' '.repeat(n - i) + "* ".repeat(n - (n - i)));
    }
}

rhombusOfStars([1]);
rhombusOfStars([2]);
rhombusOfStars([3]);
rhombusOfStars([4]);