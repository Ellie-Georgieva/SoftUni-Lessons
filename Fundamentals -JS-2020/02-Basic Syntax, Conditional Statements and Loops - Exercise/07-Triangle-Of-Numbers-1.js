function triangleOfNumbers1(numInput) {
    const num = numInput; 

    for (let i = 1; i <= num; i++) {
        let result = i + ' ';
        console.log(result.repeat(i));        
    }
}

triangleOfNumbers1(3);
triangleOfNumbers1(5);
triangleOfNumbers1(6);