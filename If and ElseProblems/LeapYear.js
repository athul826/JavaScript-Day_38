var prompt = require('prompt-sync')();
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
let year = prompt('Enter a year: ');
if (leapyear(year) == true)
    console.log(leapyear(year) + ", " + year + " is a Leap Year.");
else
    console.log(leapyear(year) + ", " + year + " is not a Leap Year.");