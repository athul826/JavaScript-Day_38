var prompt = require('prompt-sync')();
let num = prompt("Enter a number[1, 10, 100, 1000, etc]: ");
if (num==1){
    console.log("unit");
}else if (num==10){
    console.log("Ten");
}else if (num==100){
    console.log("Hundered");
}else if  (num==1000){
    console.log("thousand");
}else if (num==10000){
    console.log("Ten Thousand")
}else if (num==100000){
    console.log("Lacks")
}else{
    console.log("Invalid Number")
}