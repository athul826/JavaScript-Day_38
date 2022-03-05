var prompt = require('prompt-sync')();

let date = prompt('Enter date : ');
let month = prompt('Enter month : ');

let isInDateRange = false;
if (month == 'March' && date >= 20) {
    isInDateRange = true;
}
if (month == 'April' || month == 'May') {
    isInDateRange = true;
}
if (month == 'June' && date <= 20) {
    isInDateRange = true;
}
console.log("The given day and month is in range - " + isInDateRange);