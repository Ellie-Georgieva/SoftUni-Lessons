function multiplyBy2(...args) {
    for (let i = 0; i < args.length; i++) {
      while (true) {
        if (args[i] < 0) {
          console.log('Negative number!')
          break;
        } else {
          let result = (args[i] * 2).toFixed(2)
          console.log(`Result: ${result}`)
          break;
        }
      }
    }
  }
  
  multiplyBy2(12, 43.2144, 12.3, 543.23, -20);
  multiplyBy2(23.43, 12.3245, 0, 65.23432, 23, 65, -12);