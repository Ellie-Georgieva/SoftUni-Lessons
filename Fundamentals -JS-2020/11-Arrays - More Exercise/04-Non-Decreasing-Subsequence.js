function nonDecreasingSubsequence(arrInput) {
    let arr = arrInput.slice();
    let max = arr[0];
    
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    
    console.log(result.join(' '));    
}

nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([ 1, 2, 3, 4]);
nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1]);