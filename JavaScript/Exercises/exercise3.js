// change everything below to the newer Javascript!

// let + const
let a1 = 'test';
const b1 = true;
const c1 = 789;
a1 = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = {a, b, c};


// Template strings
const message = `Hello ${firstName} have I met you before? I thing we met in ${city} last summer no?`;

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
sym = Symbol('This is my first Symbol');

// Arrow functions
const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally Lost";