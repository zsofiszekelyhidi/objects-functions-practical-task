const car = {
    color: "black",
};

car.color = "green";

car.power = function(power) {
 console.log(`The engine power is ${power} kW.`);
};

car.power(120);
console.log(car);