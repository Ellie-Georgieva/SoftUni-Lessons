function pipesInPool(volume, pipe1, pipe2, hours) {
    volume = Number(volume);
    pipe1 = Number(pipe1);
    pipe2 = Number(pipe2); 
    hours = Number(hours);
    let pipe1Full = pipe1 * hours;
    let pipe2Full = pipe2 * hours;
    let poolFull = pipe1Full + pipe2Full;
    let volumOverflows = poolFull - volume;
    let pipe1Percent = (pipe1Full * 100) / poolFull;
    let pipe2Percent = (pipe2Full * 100) / poolFull;
    let poolVolumePercent = (poolFull * 100) / volume;
    
    if (poolFull <= volume) {
        console.log(`The pool is ${poolVolumePercent}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`)
    } else {
        console.log(`For ${hours} hours the pool overflows with ${volumOverflows} liters.`)
    }
} 
pipesInPool(1000, 100, 120, 3);
pipesInPool(100, 100, 100, 2.5);