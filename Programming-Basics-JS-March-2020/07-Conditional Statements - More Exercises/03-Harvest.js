function harvest(vineyardArea, grapes, wine, workers) {
    vineyardArea = Number(vineyardArea);
    grapes = Number(grapes);
    wine = Number(wine);    
    workers = Number(workers);

    let grapesKG = vineyardArea * grapes;
    let wineLiter = (grapesKG * 0.4) / 2.5;

    if (wineLiter >= wine) {
        let difference = wineLiter - wine
        let workersWine = difference / workers
        let wineLiter2 = Math.floor(wineLiter);
        let difference2 = Math.ceil(difference);
        let workersWine2 = Math.ceil(workersWine);
        console.log(`Good harvest this year! Total wine: ${wineLiter2} liters.`)
        console.log(`${difference2} liters left -> ${workersWine2} liters per person.`)
    } else if (wineLiter <= wine) {
        difference = wine - wineLiter;
        let difference2 = Math.floor(difference);
        console.log(`It will be a tough winter! More ${difference2} liters wine needed.`)
    }
}

harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);