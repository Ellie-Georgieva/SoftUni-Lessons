function movieRatings(arr) {
    let moviesNum = Number(arr.shift());
    let minRating = Number.POSITIVE_INFINITY;
    let maxRating = Number.NEGATIVE_INFINITY;
    let minRatingMovie = '';
    let maxRatingMovie = '';
    let totalRating = 0;
    
    for (let i = 1; i <= moviesNum; i++) {
        let movie = arr.shift();
        let rating = Number(arr.shift());
        totalRating += rating

        if (rating > maxRating) {
            maxRating = rating;
            maxRatingMovie = movie;
        }

        if (rating < minRating) {
            minRating = rating;
            minRatingMovie = movie;
        }
    }

    let averageRating = totalRating / moviesNum;
    console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRatings([5, 'A Star is Born', 7.8, 'Creed 2', 7.3, 'Mary Poppins', 7.2, 'Vice', 7.2, 'Captain Marvel', 7.1]);
movieRatings([3, 'Interstellar', 8.5, 'Dangal', 8.3, 'Green Book', 8.2]);