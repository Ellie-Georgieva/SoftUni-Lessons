function orders(productInput, quantityInput) {
    let product = productInput;
    let quantity = quantityInput;

    if (product == 'coffee') {
        return (1.50 * quantity).toFixed(2);
    } else if (product == 'water') {
        return (1 * quantity).toFixed(2);
    } else if (product == 'coke') {
        return (1.40 * quantity).toFixed(2);
    } else if (product == 'snacks') {
        return (2 * quantity).toFixed(2);
    }
}

console.log(orders('water', 5));
console.log(orders('coffee', 2));