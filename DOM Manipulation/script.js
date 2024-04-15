// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("click");
// });
// can also do mouse
// https://developer.mozilla.org/en-US/docs/Web/Events

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
var lis = document.querySelectorAll("#list li");
var delbtns = document.querySelectorAll("#list button");

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterEnter);
// These are callback functions

lis.forEach(function(li) {
    li.addEventListener("click", function() {
    	li.classList.toggle("done");
    });
});

delbtns.forEach(function(btn) {
    btn.addEventListener("click", deleteListElement);
});


function deleteListElement(event) {
	var btn = event.target;
	var li = btn.previousElementSibling;
    ul.removeChild(btn);
    ul.removeChild(li);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.addEventListener("click", deleteListElement);


    ul.appendChild(li);
    ul.appendChild(btn);
    input.value = "" ;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}