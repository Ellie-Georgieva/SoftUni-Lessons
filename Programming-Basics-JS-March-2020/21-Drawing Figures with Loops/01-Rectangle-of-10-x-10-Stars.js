// version one

function rectangleOf10Stars() {
    let stars = '';
    let num = 0;

    for (let i = 1; i <= 10; i ++) {
        for (a = 1; a <= 10; a++) {
            stars += '*';
            num++;
            if (num == 10) {
                console.log(stars);
                stars = '';
                num = 0;
            }
        }
    }
}

rectangleOf10Stars();


// version two

function rectangleOf10Stars() {

    for (let i = 1; i <= 10; i++) {
        let stars = '';
        for (let a = 1; a <= 10; a++) {
            stars += '*';    
        }
        console.log(stars);
    }
}

rectangleOf10Stars();