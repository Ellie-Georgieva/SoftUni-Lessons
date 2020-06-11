function christmasTree(arr) {
    let n = Number(arr.shift());
    console.log(' '.repeat(n + 1) + '|');
    
    for (let i = 0; i < n; i++) {
       
        console.log(`${' '.repeat(n - 1 - i)}${'*'.repeat(i + 1)}${' | '}${'*'.repeat(i + 1)}`);
    }

}

christmasTree([1]);
christmasTree([2]);
christmasTree([3]);
christmasTree([4]);