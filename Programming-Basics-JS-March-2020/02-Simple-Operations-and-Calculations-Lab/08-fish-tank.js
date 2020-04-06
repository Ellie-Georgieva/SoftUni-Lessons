function fishTank(length, width, height, percentage) {
    let volume = length * width * height;
    let liters = (volume * 0.001);
    let procent = percentage * 0.01;
    console.log((liters * (1 - procent)).toFixed(3));
}

fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);