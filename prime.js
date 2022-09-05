function isPrime(number) {
    if ( Number.isInteger(number) && number > 1 )  {
        const square = Math.floor(Math.sqrt(number));
        for (let i = 2; i <= square; i++) {
            if ( number % i == 0) {
                return false;
            } 
        }
        return true;
    } else {
        return false;
    }
}

console.log("10 is " + (isPrime(10) ? "prime" : "not prime"));
console.log("11 is " + (isPrime(11) ? "prime" : "not prime"));

console.log("1 is " + (isPrime(1) ? "prime" : "not prime"));
console.log("-2 is " + (isPrime(-2) ? "prime" : "not prime"));