function tseamAccount(arrImput) {
    let arr = arrImput.slice();
    let account = arr.shift().split(' ');
    let comand = arr.shift().split(' ');

    while (!comand.includes('Play!')) {
        let action = comand.shift();
        let game = comand.shift();
        let gameExist = false;
        let gameIndex = '';

        for (let i = 0; i < account.length; i++) {
            if (account[i] == game) {
                gameExist = true;
                gameIndex = i;
            }
        }

        if (action == 'Install') {
            if (gameExist == false) {
                account.push(game);
            }
        } else if (action == 'Uninstall') {
            if (gameExist == true) {
                account.splice(gameIndex, 1);
            }
        } else if (action == 'Update') {
            if (gameExist == true) {
                let position = account.splice(gameIndex, 1);
                account.push(...position);
            }
        } else if (action == 'Expansion') {

            for (let i = 0; i < account.length; i++) {
                let currentGame = account[i];
                if (game.includes(currentGame)) {
                    gameExist = true;
                    gameIndex = i;
                }
            }

            if (gameExist == true) {
                game = game.replace('-', ':');
                account.splice(gameIndex + 1, 0, game);                
            }
        }

        comand = arr.shift().split(' ');
    }

    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);