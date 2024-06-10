// JavaScript program to get the current date

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// Add leading zero if the day is less than 10
if (day < 10) {
    day = '0' + day;
}
// Add leading zero if the month is less then 10
if (month < 10) {
    month = '0' + month;
}

today = day + '/' + month + '/' + year;

console.log(today);