function palindromeIntegers(arrInput) {
    let numbers = arrInput;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i].toString();
        
        currentNum == currentNum.split('').reverse().join('')
            ? console.log('true')
            : console.log('false');
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);



// two functions 

function palindromeIntegers(arrInput) {
    let numbers = arrInput;

    function isPalindrome(textInput) {
        let text = textInput;
        let len = text.length;
        let isPalindromeVal = true;

        for (let i = 0; i < Math.floor(len / 2); i++) {

            if (text[i] !== text[len - 1 - i]) {
                isPalindromeVal = false;
                break;
            }
        }

        return isPalindromeVal;
    }

    for (let num of numbers) {
        console.log(isPalindrome(num.toString()));
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);