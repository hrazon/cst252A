document.addEventListener("DOMContentLoaded" , () => {
  let itemBox = document.querySelector ('.itembox');
  let showPanel = (e) => {
    console.log(e);

  let panel = document.querySelector("#infopanel");
  console.log(infopanel);
  panel.style.display = "block";

  let p = document.querySelector("#courseName");
  console.log(courseName);
  courseName.textContent = "CST 252: Scripting for Multimedia";

  let description = document.querySelector('#courseDescription');
  console.log(description);
  description.textContent = "A course about learning JavaScript.";

  document.querySelector("#courseimage").src= "images/cst252.jpg";
  }
  itemBox.addEventListener('click',showPanel);

  let theBorder = document.querySelector('.itembox');

  let showBorder = () => {
    theBorder.style.border = "thick solid";

  }

  let hideBorder = () => {
    theBorder.style.border = 'none';
  }

  theBorder.addEventListener('mouseover', showBorder);
  theBorder.addEventListener('mouseout', hideBorder);

  let exitButton = document.querySelector('#exitbutton');
  let infoPanel = document.querySelector('#infoPanel');
  let closePanel = () => {
    infoPanel.style.display = 'none';

  }
  exitButton.addEventListener('click',closePanel);
})
