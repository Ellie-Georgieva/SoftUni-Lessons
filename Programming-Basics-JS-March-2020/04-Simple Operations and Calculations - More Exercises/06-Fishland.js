function fishland(skumriqPrice, cacaPrice, palamudKG, safridKG, midiKG) {
    skumriqPrice = Number(skumriqPrice);
    cacaPrice = Number(cacaPrice);
    palamudKG = Number(palamudKG);
    safridKG = Number(safridKG);
    midiKG = Number(midiKG);
    let palamudPrice = (0.6 * skumriqPrice) + skumriqPrice;
    let safridPrice = (0.8 * cacaPrice) + cacaPrice;
    let middiPrice = 7.5;
    let totalPrice = (palamudKG * palamudPrice) + (safridKG * safridPrice) + (midiKG * middiPrice);
    console.log(totalPrice.toFixed(2));
}
fishland(6.90, 4.20, 1.5, 2.5, 1);
fishland(5.55, 3.57, 4.3, 3.6, 7);