// 100/100

function maxSequenceOfEqualElements(arrInput) {
    let arr = arrInput;
    let longestSequences = [];
    let last = undefined;
    let sequences = [];

    for (num of arr) {

        if (num === last) {
            sequences.push(num);
        } else {
            sequences = [];
            sequences.push(num);
        }

        if (longestSequences.length < sequences.length) {
            longestSequences = sequences;
        }

        last = num;
    }

    console.log(longestSequences.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElements(["0 1 1 5 2 2 6 3 3"]);



// 80/100

function maxSequenceOfEqualElements(arrInput) {
    let arr = arrInput;
    let longestSequences = '';

    for (let i = 0; i < arr.length; i++) {
        sequences = arr[i] + ' ';

        for (let j = 1 + i; j < arr.length; j++) {

            if (arr[i] == arr[j]) {
                sequences += arr[i] + ' ';
            } else {
                break;
            }
        }

        if (longestSequences.length < sequences.length) {
            longestSequences = sequences;
        }
    }

    console.log(longestSequences);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElements(["0 1 1 5 2 2 6 3 3"]);