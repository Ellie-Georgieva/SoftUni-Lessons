function gramophone(bandInput, albumInput, songInput) {
    const band = bandInput;
    const album = albumInput;
    const song = songInput;

    const songLenght = (album.length * band.length) * song.length / 2;
    const rotations = Math.ceil(songLenght / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');