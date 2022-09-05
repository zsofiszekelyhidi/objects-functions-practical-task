function greetUser(name) {
    if (name) {
        console.log("Hello, " + name);
    } else {
        console.log("Hello, Guest");
    }
};

greetUser('John');
greetUser();