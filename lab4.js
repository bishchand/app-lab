//Measuring the correlation between hot/cold drinks and drink time

//drinkTemperature: hot = 1 cold =2
//drinkTime: measured in minutes (rounded off to whole minutes)
const data = [
    {drinkTemperature:1.0, drinkTime:4},
    {drinkTemperature:1.0, drinkTime:3},
    {drinkTemperature:2.0, drinkTime:5},
    {drinkTemperature:2.0, drinkTime:3},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:2.0, drinkTime:4},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:1.0, drinkTime:3},
    {drinkTemperature:2.0, drinkTime:4},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:1.0, drinkTime:2},
    {drinkTemperature:2.0, drinkTime:5}];

//store our n
const n = data.length;

//sum of x^2
const xSquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].drinkTemperature, 2) + count;
    }
    return count;
}
//(sum of x)^2
const sumXSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].drinkTemperature + count;
    }
    return Math.pow(count,2);
}

//(sum of y)^2
const sumYSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].drinkTime + count;
    }
    return Math.pow(count,2);
}

//x*y
const sumXTimesY = function() {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].drinkTemperature * data[i].drinkTime + count;
    }
    return count;
}

//now plug into our formula
const pearsonCorrelation = () => {
    return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum()) -(sumXSquared()/n)) * (Math.sqrt(ySquaredSum()) -(sumYSquared()/n)));
}
