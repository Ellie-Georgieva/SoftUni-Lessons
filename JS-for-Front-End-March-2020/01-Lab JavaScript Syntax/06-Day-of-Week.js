function dayOfWeek(day) {
    switch (day) {
        case "Monday": console.log(1); break;
        case "Tuesday": console.log(2); break;
        case "Wednesday": console.log(3); break;
        case "Thursday": console.log(4); break;
        case "Friday": console.log(5); break;
        case "Saturday": console.log(6); break;
        case "Sunday": console.log(7); break;
        default: console.log("error"); break;
    }
} 
dayOfWeek("Monday");
dayOfWeek("Friday");
dayOfWeek("Invalid");



function printDayOfWeek(day) {
    var number = day === 'Monday' ? 1
      : day === 'Tuesday' ? 2
      : day === 'Wednesday' ? 3
      : day === 'Thursday' ? 4
      : day === 'Friday' ? 5
      : day === 'Saturday' ? 6
      : day === 'Sunday' ? 7
      : 'error';
  
    console.log(number);
  }
  
  printDayOfWeek('Monday');
  printDayOfWeek('Friday');
  printDayOfWeek('ponedelnik');
