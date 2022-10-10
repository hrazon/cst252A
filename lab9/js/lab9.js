//author: Heaven
//created 10/09/2022
//license: public domain

function myFunction() {


// change the color and bg color //

document.getElementById("myList").style.color = "pink";
document.getElementById("myList").style.backgroundColor = "white";

// Create an list:
const node = document.createElement("li");

// Create a text:
const textnode = document.createTextNode("Coffee");


// Append the text to the list:
node.appendChild(textnode);



// Append the "li" node to the list:
outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";


}
