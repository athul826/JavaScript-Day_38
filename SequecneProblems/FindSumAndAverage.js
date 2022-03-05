for(var i = 1; i <= 5; i++) {
    var randomNum = Math.floor(Math.random() * 100);
    if (randomNum > 9) {
        console.log(randomNum);
    }  
    else
    i=i-1;
    }