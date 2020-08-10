function multiplicationTable(numInput) {
    const num = numInput;

    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);