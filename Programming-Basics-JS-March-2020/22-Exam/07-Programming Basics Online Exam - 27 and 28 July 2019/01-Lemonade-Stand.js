function lemonadeStand(arr) {
    let lemonsKg = Number(arr.shift());
    let sugarKg = Number(arr.shift());
    let waterL = Number(arr.shift());

    let lemonJuice = lemonsKg * 980;
    let lemonWater = lemonJuice + (waterL * 1000);
    let juice = lemonWater + (sugarKg * 0.3);
    let cups = Math.floor(juice / 150);
    let profit = cups * 1.2;

    console.log(`All cups sold: ${cups}`);
    console.log(`Money earned: ${profit.toFixed(2)}`);
}

lemonadeStand([5, 3.5, 5]);
lemonadeStand([250, 20, 100]);
lemonadeStand([85, 17.5, 35]);