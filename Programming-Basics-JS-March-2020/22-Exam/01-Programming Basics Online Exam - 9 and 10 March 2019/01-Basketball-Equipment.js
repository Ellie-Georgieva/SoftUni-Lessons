function basketballEquipment(arr) {
    let trainingFee = Number(arr.shift());

    let sneakers = trainingFee - (trainingFee * 0.4);
    let outfit = sneakers - (sneakers * 0.2);
    let ball = outfit / 4;
    let accessories = ball / 5;
    let total = trainingFee + sneakers + outfit + ball + accessories;

    console.log(total.toFixed(2));
}

basketballEquipment([320]);
basketballEquipment([550]);
basketballEquipment([230]);