let field = [];

function createGame() {
    let id = 1;
    let xOff = 100;
    let yOff = 100;

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            let col = null;

            if (i >= 1 && i <= 2 && j >= 1 && j <= 2) {
                col = createVector(214, 113, 96)
            } else {
                col = createVector(115, 138, 239)
            }

            let square = new Square(xOff, yOff, col, id);
            id++;
            field.push(square);
            xOff += 100;
        }

        yOff += 100;
        xOff = 100;
    }
}

function setup() {
    createCanvas(600, 600);
    background(255, 201, 147);
    
}

function draw() {

    for (let square of field) {
        square.show();
    }
}