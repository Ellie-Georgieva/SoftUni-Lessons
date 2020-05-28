function sumPrimeNonPrime(arr) {
    let num = arr.shift();
    let prime = 0;
    let nonPrime = 0;

    while (num != 'stop') {
        num = Number(num);
        flag = false;

        if (num < 0) {
            console.log('Number is negative.');            
        }
    
        for (let i = 2; i < num; i++) {
            
            if (num % i == 0) {
                nonPrime += num;
                flag = true;
                break;
            }
        }

        if (flag == false && num > 0) {
            prime += num;
        }

        num = arr.shift();        
    }

    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
} 

sumPrimeNonPrime([3, 9, 0, 7, 19, 4, 'stop']);
sumPrimeNonPrime([30, 83, 33, -1, 20, 'stop']);
sumPrimeNonPrime([0, -9, 0, 'stop']);