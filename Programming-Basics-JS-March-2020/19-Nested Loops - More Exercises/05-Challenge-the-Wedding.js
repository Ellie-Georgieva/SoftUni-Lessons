function challengeTheWedding(arr) {
    let men = Number(arr.shift());
    let women = Number(arr.shift());
    let masses = Number(arr.shift());
    let flag = false;
    let meetings = ''
    let dateNum = 0;



    for (let i = 1; i <= men; i++) {

        for (let j = 1; j <= women; j++) {
                
            let date = '' + `(${i} <-> ${j})`;
            dateNum++;
            meetings += date + ' ';

            if (dateNum == masses) {
                flag = true;
                break;
            }
        }

        if (flag == true) {
            break;
        }
    }

     console.log(meetings);
}

// challengeTheWedding([2, 2, 6]);
challengeTheWedding([2, 2, 3]);
// challengeTheWedding([5, 8, 40]);