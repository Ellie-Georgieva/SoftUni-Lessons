function setValuesToIndexes(args) {
    let arrayLength = Number(args.splice(0, 1));
    let arr = [];

    for(line of args) {
        let indexValue = line.split(/\s-\s/).map(Number);
        arr[indexValue[0]] = indexValue[1];
    }

    for(let i = 0; i < arrayLength; i++) {
        console.log(arr[i] | 0);
    }
}
setValuesToIndexes(["3", "0 - 5", "1 - 6", "2 - 7"]);
setValuesToIndexes(["2", "0 - 5", "0 - 6", "0 - 7"]);
setValuesToIndexes(["5", "0 - 3", "3 - -1", "4 - 2"]);




function setValuesToIndexes2(array) {
   let n = +array.shift();
   let result = [];
   for (let index = 0; index < array.length; index++) {
       const tokens = array[index].split(" - ");
       const inputIndex = tokens[0];
       const inputValue = tokens[1];
       result[inputIndex] = inputValue;
   }
   for (let index = 0; index < n; index++) {
       if (!result[index]) {
           result[index] = 0;
       } 
   }
   result.forEach(e=> {
       console.log(e);
   })
}
setValuesToIndexes2([3, "0 - 5", "1 - 6", "2 - 7"]);
setValuesToIndexes2([2, "0 - 5", "0 - 6", "0 - 7"]);
setValuesToIndexes2([5, "0 - 3", "3 - -1", "4 - 2"]);



function setValuesToIndexes3(array) {
    let n = +array.shift();
    let result = new Array(n);
    result.fill(0);

    for (let index = 0; index < array.length; index++) {
        const tokens = array[index].split(" - ");
        const inputIndex = tokens[0];
        const inputValue = tokens[1];
        result[inputIndex] = inputValue;
    }
    result.forEach(e=> {
        console.log(e);
    })
 }
 setValuesToIndexes3([3, "0 - 5", "1 - 6", "2 - 7"]);
 setValuesToIndexes3([2, "0 - 5", "0 - 6", "0 - 7"]);
 setValuesToIndexes3([5, "0 - 3", "3 - -1", "4 - 2"]);
 