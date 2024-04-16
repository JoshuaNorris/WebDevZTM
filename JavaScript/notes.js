

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

// Map, Filter, Reduce

const array = [1,2,10,16]

const mapArray = array.map((num) => {
	return num * 2
})
// results in [2,4,20,32]

// Filter
const array2 = [1,2,10,16]
const filterArray = array2.filter(num => num > 5);

// results [10,16]

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0)

// This results in 1+2+10+16

// ADVANCED OBJECTS

// Reference Type

// Context

	// "this" is the object environment we are in right now

// Instantiation
	
	// when you make a copy of an object

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		conole.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		// super gives us access to the contructor in Player
	}

	play() {
		console.log(`WEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard1 = new Wizard('Shawn', 'Dark Magic');


// Cloning objects
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
// These are shallow clones...
// so if there is an object inside the object being claned that will be pass by roference

let superClone = JSON.parse(JSON.stringify(obj));
// This is a deep clone
// However this is a very costly operation


// Type Coercion

1 == '1'
// This is true
// JS will automatically convert '1' to 1


// == is type coercion, === is an equals without type coercion

// -0 and +0 are actually different things in js
// Object.is() is another way to find equality

// ES7

"Hello".includes('o')
// This is true

// ES8

// .padStart(int)
// .padEnd(int)
// This adds a certain amount of empty chars before and after

// Object.values
// Object.entries

// Object.values(obj).forEach(value => {
	// console.log(value);
// })

// Object.keyn(obj).forEach(key, value => {
	// console.log(key, obj[key]);
// })

// Object.entries(obj).forEach(value => {
	// console.log(value);
// })


// ES10

// flat()
// it takes an array that is nested and returns a 1d array
// it can also take an argument that 
// flat can also get rid of all empty objects in an array

// flatMap()

// trimStart() and trimEnd()

// frommEntries
userProfiles = [['camandorTom, 23']['derek', 40]['hansel', 18]]
Object.fromEntries(userProfiles);
	// This will create an object

// Advanced looping
const basket ['apples', 'oranges', 'grapes'];

for (item of basket) {
	console.log(item);
}
// This will print all the elements of basket

const detailedBasket {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

for (item in detailedBasket) {
	console.log(item);
}
// This prints the object properties (apples, oranges, grapes)
// this is not iterating, it is enumerating

// ES2020

// BigInt
	// This is a new type. similar to long in java

// Optional Chaining Operator


// let weight = Andrei_pokemon?.pikachu?.weight
// this will result in undefined if any errors are found

// Nullish coalescing

// let weight = Andrei_pokemon?.pikachu?.weight ?? 'no power'
	// this would make weight = 'no power' if it is null or undefined


// ES2021

// str.replaceAll('partofstringyouwanttoreplace', 'replacement')

// ES2022

const arr[10,20,30,40,50];
arr.at(-2);

// ES2023

// const lastMonster = ztmMonsters.findLast(item => item.level > 15);
// const lastMonster = ztmMonsters.findLastIndex(item => item.level > 15);

// ztmMonstersList.toReversed();
// this returns the reversed list, but does not change the original list

// toSpliced
// toSorted

// array.with(1, "gost")
	// this will return a list with gost in the first index, but doesnt change the original array

// debugger;


// Modules

// poluting the global namespace is a big problem in big projects
	// naming a function the same as someoene else

// ES6

// in one file
// export const add = (a, b) => a + b;
// export default function add() {
// 	return a + b;
// }

// in another file
// import { add } from './add';
// import add from './add';























