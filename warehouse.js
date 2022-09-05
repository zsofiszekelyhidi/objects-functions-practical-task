let sumOfApples = 0;
let sumOfPears = 0;

function addFruits(fruit, numberOfFruits) {
    if (Number.isInteger(numberOfFruits) && numberOfFruits > 0) {
        if (fruit === "apple") {
            sumOfApples += numberOfFruits;
            return sumOfApples;
        } else if (fruit === "pear") {
            sumOfPears += numberOfFruits;
            return sumOfPears;
        } 
    }
};

console.log("The sum of apples in the warehouse is " + addFruits("apple", 30));
console.log("The sum of apples in the warehouse is " + addFruits("apple", 30));

console.log("The sum of pears in the warehouse is " + addFruits("pear", 20));
console.log("The sum of pears in the warehouse is " + addFruits("pear", 20));