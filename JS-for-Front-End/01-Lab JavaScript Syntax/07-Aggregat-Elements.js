function aggregateElements(arg) {
    console.log(arg.reduce((a, b) => a + b, 0));
    console.log(arg.reduce((a, b) => a + 1/b, 0));
    console.log(arg.join(""));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);