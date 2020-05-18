function oldBooks(arr) {
    let book = arr.shift();
    let library = +arr.shift();
    let checkedBooks = arr.shift();
    let search = 0
    

    while (search != library) {
            if (checkedBooks === book) {
                console.log(`You checked ${search} books and found it.`);
                break;
            }
        checkedBooks = arr.shift();
        search++
    }

    if (checkedBooks != book) {
        console.log('The book you search is not here!');
        console.log(`You checked ${library} books.`);
    }
}

oldBooks(['Troy', '8', 'Stronger', 'Life Style', 'Troy']);
oldBooks(['The Spot', '4', 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify']);
oldBooks(['Bourne', '32', 'True Story', 'Forever', 'More Space', 'The Girl', 'Spaceship', 'Strongest', 'Profit', 'Tripple', 'Stella', 'The Matrix', 'Bourne']);