function calculate() {
    return (30 + 25) + ((35 - 14) * 2)
}
console.log(calculate());


(function () {
    console.log((30 + 25) + ((35 - 14) * 2))
})();

// самоизвикваща се, анонимна функция (ифи)
// immediately invoked function expression (iife)