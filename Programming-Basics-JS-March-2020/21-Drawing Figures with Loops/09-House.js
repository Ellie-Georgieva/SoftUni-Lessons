function house(arr) {
    let n = Number(arr.shift());
    let rowLength = Math.floor((n + 1) / 2);
    let startingStars = 0;
   
    for (let row = 0; row < rowLength; row++) {
       
        if (n % 2 == 0) {
        startingStars = 2 * (row + 1);
        } else {
        startingStars = 2 * row + 1;
        }
        
        console.log("-".repeat((n - startingStars) / 2) + '*'.repeat(startingStars) + '-'.repeat((n - startingStars) / 2));
    }

    for (let row = 0; row < Math.floor(n / 2); row++) {
        console.log('|' + '*'.repeat(n - 2) + '|');
    }
}

house([2]);
house([3]);
house([4]);
house([5]);
house([6]);