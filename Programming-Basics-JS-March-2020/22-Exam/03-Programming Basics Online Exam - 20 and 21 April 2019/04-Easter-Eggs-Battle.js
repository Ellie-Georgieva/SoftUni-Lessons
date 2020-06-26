function easterEggsBattle(arr) {
    let firstPlayerEggs = Number(arr.shift());
    let secondPlayerEggs = Number(arr.shift());
    let action = arr.shift();

    while (action != 'End of battle') {

        if (action == 'one') {
            secondPlayerEggs--;
        } else if (action == 'two') {
            firstPlayerEggs--;
        }

        if (firstPlayerEggs == 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;
        } else if (secondPlayerEggs == 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            break;
        }

        action = arr.shift();
    }

    if (action == 'End of battle') {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}

easterEggsBattle(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End of battle']);
easterEggsBattle(['2', '6', 'one', 'two', 'two']);
easterEggsBattle(['6', '3', 'one', 'two', 'two', 'one', 'one']);