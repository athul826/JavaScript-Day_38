var maximum = 0;
var minimum = 1000;
for (var i = 1; i <= 5; i++) {
var randomNum = Math.floor(Math.random() * 1000);
if (randomNum > 99) {
    console.log(randomNum);
    if(randomNum > maximum)
        maximum = randomNum;
    if(randomNum < minimum)
    minimum = randomNum;
}  
else
i=i-1;
}
console.log("Max: " + maximum);
console.log("Min: " + minimum);