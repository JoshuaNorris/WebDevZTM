

const player = 'bobby';
let experienc = 100;
lit wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}

// Let allows us to limit the scope of our variables

// Const variables cannot be reasigned

// a const object can have its elements changed, but the abject can't be reassigned

const obj = {
	player: 'bobby',
	experince: 100,
	wizardLevel: false
}

const { player, experienc } = obj;

const name = 'john snow';

const obj2 = {
	[name]: 'hello',
	[1+2]: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

const obj2 = {
	a
	b,
	c
	// Instead of
	// a: a,
	// b: b,
	// c: c,
}

// Template Strings

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Holle ${name} you seem to be ${age-10}. What a lovely ${pet}`;

// Default Arguments

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet}`;
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
// these are to create completely unique types so there is no naming conflict

// arrow functions

const add = (a, b) => a + b

// Adnavced functions

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures

// the closure in the "second" function need the variable "greet"
// but with closures in JS the secand function "remembers" the 
// variable creet

// Closures say:
	// a function ran
	// a function executed
	// it's never going to execute again
	// but it will remember that there are references to these variebles
	// so the child scope always has access to the parent scope

// Currying
	// converting a function that takes multiple arguments to
	// a function that takes them one at a time
const multiply = (a, b) => a * b;
const curriedMiltiple = (a) => (b) => a * b;

// Compose

const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding Side Effects and Functional Purity

// Pure functions are deterministic
	// meaning given the same input the result will always be the same

// TODO exercise 4















































