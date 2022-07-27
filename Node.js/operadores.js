var generateSerial = function(max) {
    
    return Math.floor(Math.random()* max);
};

console.log(generateSerial(1000))
console.log(generateSerial())
