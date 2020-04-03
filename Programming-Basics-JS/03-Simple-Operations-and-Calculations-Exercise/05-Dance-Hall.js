function danceHall(length, width, wardrobe) {
    length = Number(length)
    width = Number(width)
    wardrobe = Number(wardrobe)
    let sizeHall = (length * 100) * (width * 100);
    let sizeWardrobeSm = wardrobe * 100;
    let sizeWardrobe = sizeWardrobeSm * sizeWardrobeSm;
    let sizeBench = sizeHall / 10;
    let freeSpace = sizeHall - sizeWardrobe - sizeBench;
    let dancersSpace = 40 + 7000;
    let dancers = (freeSpace / dancersSpace);
    console.log(Math.floor(Number(dancers)));
}

danceHall(50, 25, 2);