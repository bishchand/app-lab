let waitingTime = 0;
let holdingPhone = console.log("is the customer holding a phone? yes/no");
let isAlone = console.log("is the customer alone? yes/no");

if holdingPhone == "yes";
    waitingTime =+ 1;
else if holdingPhone == "no";
    waitingTime =+ 3;
else 
    console.log("Invalid answer. Please write yes or no.");

if isAlone == "no";
    waitingTime =+ 2;
else if isAlone == "yes";
    waitingTime =+ 0.5;
else 
    console.log("Invalid answer. Please write yes or no.");

console.log("Estimated drink time: ", waitingTime)
