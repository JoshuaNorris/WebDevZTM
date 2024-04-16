// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array1 = []
array.forEach(function(obj) {
   array1.push({
     username: obj.username + "!",
     team: obj.team,
     score: obj.score,
     items: obj.items
   });
});

//Create an array using map that has all the usernames with a "? to each of the usernames

const array2 = array.map((obj) => ({
    username: obj.username + "?",
    team: obj.team,
    score: obj.score,
    items: obj.items
}));


//Filter the array to only include users who are on team: red

const filterArray = array.filter(obj => obj.team === "red");

//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)