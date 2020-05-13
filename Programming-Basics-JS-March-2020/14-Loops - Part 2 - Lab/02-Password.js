function password(arr) {
    let username = arr.shift();
    let password = arr.shift();
    let login = arr.shift();

    while (login !== password) {
        login = arr.shift();
    }
    console.log(`Welcome ${username}!`);
}

password(['Nakov', '1234', 'pass', '1324', '1234']);
password(['Gosho', 'secret', 'secret']);