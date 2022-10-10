//**
//* Author: Heaven Razon
//* Created: 10/04/2022
//* CST 252

function ready (){
  let outputEl= document.querySelector("#output")
  let oneEl= document.createElement("button")
  let twoEl= document.createElement("button")


  let parent = document.querySelector("output")
  parent.appendChild(oneEl)
  oneEl.textContent='Click me!';
  oneEl.style.color= 'blue'

  parent.appendChild(twoEl)
  twoEl.textContent= 'Click me!';
  twoEl.style.backgroundcolor= 'red'
  twoEl.style.color='white'
}
