function nextDay(yearInput, monthInput, dayInput) {
    const year = yearInput;
    const month = monthInput - 1;
    const day = dayInput;

    const date = new Date(year, month, day);
    date.setDate(date.getDate() + 1);

    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    console.log(`${yyyy}-${mm}-${dd}`);
}

nextDay(2016, 9, 30);