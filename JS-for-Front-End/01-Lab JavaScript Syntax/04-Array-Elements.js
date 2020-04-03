function arrayElements(arr) {
    for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]); 
    }
}
arrayElements([1, 2, 3, 4, 5]);



function arrayElements2(arr) {
    for (let element of arr) {
    console.log(element); 
    }
}
arrayElements2([1, 2, 3, 4, 5]);




function arrayElements3(arr) {
    arr.forEach(element => {
        console.log(element)
    })
}
arrayElements3([1, 2, 3, 4, 5]);
arrayElements3(["aaa", "ooo", "uuu"]);



