function charityCampaign(days, confectioners, cakes, corrugations, pancakes) {
    days = Number(days);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    corrugations = Number(corrugations);
    pancakes = Number(pancakes)
    let cakesPrice = 45;
    let corrugationsPrice = 5.80;
    let pancakesPrice = 3.20;
    let cakesEarnings = cakesPrice * cakes;
    let corrugationsEarnings = corrugationsPrice * corrugations;
    let pancakesEarnings = pancakesPrice * pancakes;
    let daysEarnings = (cakesEarnings + corrugationsEarnings + pancakesEarnings) * confectioners;
    let campaignEarnings = daysEarnings * days;
    let finalEarnings = (campaignEarnings - (campaignEarnings/8)).toFixed(2);
    console.log(finalEarnings);
}
charityCampaign(20, 8, 14, 30, 16);
charityCampaign(131, 5, 9, 33, 46);