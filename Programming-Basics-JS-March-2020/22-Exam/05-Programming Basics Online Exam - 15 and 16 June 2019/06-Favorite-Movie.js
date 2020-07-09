function favoriteMovie(arr) {
    let movieTitle = arr.shift();
    let moviesNum = 0;
    let movieWin = '';
    let pointsWin = 0;

    while (movieTitle != 'STOP') {
        moviesNum++;
        let points = 0;

        if (moviesNum > 7) {
            console.log(`The limit is reached.`);
            break;
        }

        for (let i = 0; i < movieTitle.length; i++) {
            points += movieTitle.charCodeAt(i);

            if (movieTitle.charCodeAt(i) >= 97 && movieTitle.charCodeAt(i) <= 122) {
                points -= (2 * movieTitle.length);
            } else if (movieTitle.charCodeAt(i) >= 65 && movieTitle.charCodeAt(i) <= 90)
                points -= movieTitle.length;
        }

        if (points > pointsWin) {
            pointsWin = points;
            movieWin = movieTitle;
        }

        movieTitle = arr.shift();
    }

    console.log(`The best movie for you is ${movieWin} with ${pointsWin} ASCII sum.`);
}

favoriteMovie(['Matrix', 'Breaking bad', 'Legend', 'STOP']);
favoriteMovie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter', 'Wizards']);