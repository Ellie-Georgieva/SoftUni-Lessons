function login(arr) {
    const username = arr.shift();
    const password = username.split('').reverse().join('');
    let loginPassword = arr.shift();
    let counter = 0;

    while (loginPassword != password) {
        counter++;

        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            break; 
        } else {
            console.log(`Incorrect password. Try again.`);
        }

        loginPassword = arr.shift();
    }

    if (loginPassword == password) {
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);