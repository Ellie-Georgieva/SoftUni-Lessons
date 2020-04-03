function trainingLab(length, width) {
    length = Number(length);
    width = Number(width);
    let widthSM = ((width * 100) - 100);
    let widthSitе = (widthSM / 70);
    let widthSitеNumber = Math.floor(Number(widthSitе))
    let lengthSM =  length * 100;
    let lengthSite = (lengthSM / 120)
    let lengthSiteNumber = Number(lengthSite);
    let lengthSiteNumber2 = Math.floor(lengthSiteNumber);
    let allSits = (lengthSiteNumber2 * widthSitеNumber) - 3;
    console.log(Number(allSits));
}
trainingLab(15, 8.9);
trainingLab(8.4, 5.2);
