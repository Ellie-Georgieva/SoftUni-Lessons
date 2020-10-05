function loadingBar(percentageInput) {
    let percentage = percentageInput;
    let barLength = 100;
    let stillLoading = barLength - percentage; 

    let loading = (percentageInput, stillLoadingInput) => {
        let percentage = percentageInput; 
        let stillLoading = stillLoadingInput;
        let firstElement = '%';
        let secondElement = '.';

        return firstElement.repeat(percentage / 10) + secondElement.repeat(stillLoading / 10);
    }

    if (percentage < 100) {
        console.log(`${percentage}% [${loading(percentage, stillLoading)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${percentage}% [${loading(percentage, stillLoading)}]`);
    }
} 

loadingBar(30);
loadingBar(50);
loadingBar(100);