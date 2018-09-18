let waitingTime = 0;
let holdingPhone = input("is the customer holding a phone? yes/no");
let isAlone = input("is the customer alone? yes/no");

if holdingPhone == "yes";
    waitingTime =+ 1;
else if holdingPhone == "no";
    waitingTime =+ 3;
else print("Invalid answer. Please write yes or no.");

if isAlone == "no";
    waitingTime =+ 2;
else if isAlone == "yes";
    waitingTime =+ 0.5;

print("Estimated drink time: ", waitingTime)
