///this will allow the box above move at a certain pace
document.addEventListener("DOMContentLoaded", () => {

	let box = document.querySelector('.box');


	let offset = 0;

	let animationFrame = () => {
		offset = offset + 2;
		box.style.left = offset + 'px';
	}


	setInterval(animationFrame, 10);


});

/// this is what makes the box move
document.addEventListener("DOMContentLoaded", () => {

	let box = document.querySelector('.box');



	//box.classList.add('boxToggleClass');
	let activateAnimation = () => {
		box.classList.toggle('boxToggleClass');
	}

	setInterval(activateAnimation, 3000);

});

/// this is what makes the laoding bar move
function typying (){
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,50);
  }
}

function animate({duration, draw, timing}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
