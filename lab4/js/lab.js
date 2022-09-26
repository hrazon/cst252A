function flowerFunction() {
	//initialize();

	//YOUR CODE GOES RIGHT HERE

	//this changes flower that represents the answer to the color purple
	document.querySelector("#flower5 .center").style.backgroundColor= 'purple';

	//this changes flower with the addion sign background color to white
	document.querySelector("#flower2 .center").style.backgroundColor= 'white';

	//this changes the color number ONLY for flower 5 to white
	document.querySelector("#flower5 .center").style.color= 'white';

	//this puts the flowers in order
	document.querySelector(`#flower1`).style.marginTop = "100px";
	document.querySelector(`#flower2`).style.marginTop = "100px";
	document.querySelector(`#flower3`).style.marginTop = "100px";
	document.querySelector(`#flower4`).style.marginTop = "100px";
	document.querySelector(`#flower5`).style.marginTop = "100px";

	//this aligns all the flowers
	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;

	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();



}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}
