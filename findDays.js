// JavaScript program to find out if 1st January will be a Sunday between 2010 and 2050.

for (let year = 2010; year <= 2050; year++) {
    let firstDays = new Date(year, 0, 1);
    console.log(firstDays.getDay());
    if (firstDays.getDay() === 0) {
        console.log(" 1st Jamuary is being a Sunday", + year);
    }
}