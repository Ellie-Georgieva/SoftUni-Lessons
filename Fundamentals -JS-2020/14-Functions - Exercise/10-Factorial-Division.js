function factorialDivision(firstFactorialInput, secondFactorialInput) {
    let firstFactorial = firstFactorialInput;
    let secondFactorial = secondFactorialInput;

    let factorial = (numberInput) => {
        let number = numberInput;
        let result = 1;

        for (let i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }

    let division = (factorial(firstFactorial) / factorial(secondFactorial)).toFixed(2);

    console.log(division);
}

factorialDivision(5, 2);
factorialDivision(6, 2);



// recursion

function factorialDivision(firstFactorialInput, secondFactorialInput) {
    let firstFactorial = firstFactorialInput;
    let secondFactorial = secondFactorialInput;

    let factorial = (numberInput) => {
        let number = numberInput;
        
        if (number == 1) {
            return 1;
        }

        let result = number * factorial(number - 1);
        return result;
    }

    let division = (factorial(firstFactorial) / factorial(secondFactorial)).toFixed(2);

    console.log(division);
}

factorialDivision(5, 2);
factorialDivision(6, 2);