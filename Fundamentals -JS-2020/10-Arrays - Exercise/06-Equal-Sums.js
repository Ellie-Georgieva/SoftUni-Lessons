function equalSums(arrInput) {
    let arr = arrInput;
    let counter = 0;
    curentNum = 0;
    isEqual = false;

    while (arr.length != counter) {
        let leftSum = 0;
        let rightSum = 0;
        counter++;
    
        for (let i = 0; i < curentNum ; i++) {
            leftSum += arr[i];
            leftNo = false;
        }

        for (let i = curentNum + 1; i < arr.length ; i++) {
            rightSum += arr[i];
            rightNo = false;
        }

        if (rightSum == leftSum) {
            console.log(curentNum);
            isEqual = true;
            break;
        }
        
        curentNum++;
    }

    if (isEqual == false) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); 