function personalTitles(age, gender) {
    age = Number(age); 
    
    if (gender == 'm' && age >= 16) {
        console.log('Mr.');
    } else if (gender == 'm' && age < 16) {
        console.log('Master'); 
    } else if (gender == 'f' && age >= 16) {
        console.log('Ms.');
    } else if (gender == 'f' && age < 16) {
        console.log('Miss');
    }
}

personalTitles(12, 'f');
personalTitles(17, 'm');
personalTitles(25, 'f');
personalTitles(13.5, 'm');