function summerOutfit(degrees, timeOfDay) {
    degrees = Number(degrees);
    let Outfit;
    let Shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == 'Morning') {
            Outfit = 'Sweatshirt';
            Shoes = 'Sneakers';
        } else if (timeOfDay == 'Afternoon' || timeOfDay == 'Evening') {
            Outfit = 'Shirt';
            Shoes = 'Moccasins';
        } 
    } else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay == 'Morning' || timeOfDay == 'Evening') {
            Outfit = 'Shirt';
            Shoes = 'Moccasins';
        } else if (timeOfDay == 'Afternoon') {
            Outfit = 'T-Shirt';
            Shoes = 'Sandals';
        } 
    } else if (degrees >= 25) {
        if (timeOfDay == 'Morning') {
            Outfit = 'T-Shirt';
            Shoes = 'Sandals';
        } else if (timeOfDay == 'Afternoon') {
            Outfit = 'Swim Suit';
            Shoes = 'Barefoot';
        } else if (timeOfDay == 'Evening') {
            Outfit = 'Shirt';
            Shoes = 'Moccasins';
        } 
    }

    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`)
}

summerOutfit(16, 'Morning');
summerOutfit(22, 'Afternoon');
summerOutfit(28, 'Evening');