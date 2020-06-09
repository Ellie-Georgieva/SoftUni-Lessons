function rectangleOfnStars(arr) {
    let n = Number(arr.shift());

    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let a = 1; a <= n; a++) {
            stars += '*';
        }
        console.log(stars);
    }
}

rectangleOfnStars([2]);
rectangleOfnStars([3]);
rectangleOfnStars([4]);