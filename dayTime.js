// Write a JavaScript program to display the current day and time in the following format.  

const today = new Date();
const day = today.getDay();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("Today is: " + dayList[day] + '.');

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM";
let hourModify = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0 PM
if (hourModify === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
        hourModify = 12;
        prepand = 'Noon';
    } else {
        hour = 12;
        prepand = 'PM'
    }
}

// Same case for AM
if (hourModify === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
        hourModify = 12;
        prepand = 'Midnight'
    } else {
        hourModify = 12;
        prepand = 'AM'
    }
}

console.log('Current Time: ' + hourModify + prepand + ':' + minute + ':' + second);
