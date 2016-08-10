//TODO Booking.com check test cases for which it is failing

function processData(input) {
    //Enter your code here
    var input = parseInt(input);
    var countUnluckyFloors = 0 ; 
    var luckyFloor = 0;
    for( var i = 1 ; i <= input ; i++){
        if( checkUnlucky(i)){
            countUnluckyFloors++;
        }
    }
    luckyFloor = input+countUnluckyFloors
    
    while(checkUnlucky(luckyFloor)){
        luckyFloor++;
    };
    console.log(luckyFloor);
    
} 

function checkUnlucky(num){
    var digit = 0; 
    var twoDigit = 0 ; 
    while(num > 0 ){
        digit = num % 10;
        twoDigit = num%100;
        if(digit === 4 || twoDigit === 13) 
            return true;
        else{
            num = Math.floor(num/10);
        }
     }
}


// Working Solution

function processData(input) {
    //Enter your code here
    var input = parseInt(input);
    var luckyFloors = generateNLuckyFloors(input);
    console.log(luckyFloors[input]);
    
} 

function isUnlucky(num){
    var digit = 0; 
    var twoDigit = 0 ; 
    while(num > 0 ){
        digit = num % 10;
        twoDigit = num%100;
        if(digit === 4 || twoDigit === 13) 
            return true;
        else{
            num = Math.floor(num/10);
        }
     }
    return false;
}

function generateNLuckyFloors(num){
    var floors = {};
    var luckyFloor = 1 ;
    for (i = 1 ; i <=num ;){
        if( !isUnlucky(luckyFloor)){
            floors[i] = luckyFloor;
            i++;
        }
         luckyFloor++;
    }
    return floors;
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});