// Check whether a given year is a leap year or not.

const leapYear = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2016));