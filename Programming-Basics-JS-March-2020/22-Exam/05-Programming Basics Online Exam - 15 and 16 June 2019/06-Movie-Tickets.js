function movieTickets(arr) {
    let a1 = Number(arr.shift());
    let a2 = Number(arr.shift());
    let n = Number(arr.shift());

        for (let one = a1; one <= a2 - 1; one++) {
            symbol1 = String.fromCharCode(one);  

            for (let two = 1; two <= n - 1; two++) {

                for (let three = 1; three <= n / 2 - 1; three++) {

                    let sum = two + three + one;

                    if (one % 2 != 0 && sum % 2 != 0) {
                        console.log(`${symbol1}-${two}${three}${one}`);
                    }
                }
            }
        }   
}

movieTickets([86, 88, 4]);
 movieTickets([71, 74, 6]);
movieTickets([69, 72, 4]);