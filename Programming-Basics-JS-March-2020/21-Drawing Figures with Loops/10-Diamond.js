function diamond(arr) {
    let n = Number(arr.shift());
    let side = Math.floor((n - 1) / 2);
    
    for (let i = 1; i <= (n - 1) / 2; i++) {
        let upperPart = '-'.repeat(side) + '*';
        let middlePart = n - 2 * side - 2;
        
        if (middlePart >= 0) {
            upperPart += '-'.repeat(middlePart) + "*"; 
        }
        
        upperPart += '-'.repeat(side);
        side--;
        console.log(upperPart); 
    }

    for (let a = (n - 1) / 2; a >= 0 ; a--) {   
        let bottomPart = '-'.repeat(side) + "*";
        let middlePart = n - 2 * side - 2;
        
        if (middlePart >= 0) { 
            bottomPart += '-'.repeat(middlePart) + "*"; 
        }

        bottomPart += '-'.repeat(side);
        side++;
        console.log(bottomPart);
    }
}

diamond([1]);
diamond([2]);
diamond([3]);
diamond([4]);
diamond([5]);
diamond([6]);
diamond([7]);
diamond([8]);
diamond([9]);