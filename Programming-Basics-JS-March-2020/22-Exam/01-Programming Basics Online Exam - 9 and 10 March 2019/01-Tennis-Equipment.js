function tennisEquipment(arr) {
    let tennisRacketPrice = Number(arr.shift());
    let tennisRacketsNum = Number(arr.shift());
    let sneakersNum = Number(arr.shift());

    let tennisRacket = tennisRacketPrice * tennisRacketsNum;
    let sneakersPrice = tennisRacketPrice / 6;
    let sneakers = sneakersNum * sneakersPrice;
    let equipmentPrice = (tennisRacket + sneakers) * 0.2;
    let total = equipmentPrice + tennisRacket + sneakers;
    let jokovich = total / 8;
    let sponsors = total - jokovich;

    console.log(`Price to be paid by Djokovic ${Math.floor(jokovich)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}

tennisEquipment([850, 4, 2]);
tennisEquipment([1000, 3, 1]);
tennisEquipment([386, 7, 4]);