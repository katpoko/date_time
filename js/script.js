// Get link/button/toggle
// Get the <body>

const lightDark = document.querySelector('a');
const body = document.querySelector('body');

const gradientElement = document.getElementById("gradient");
let currentColorIndex = 0;
const colors = ["red", "orange", "yellow", "blue", "blueviolet"];



// Manually add dark class
body.classList.add('dark');

// SETTING
// Add 'dark' class
// body.classList.add('dark');

lightDark.addEventListener('click', ()=> {


  function changeGradient() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const nextColor = colors[currentColorIndex];
    gradientElement.style.backgroundImage = `linear-gradient(to right, ${colors[currentColorIndex - 1]}, ${nextColor})`;
  }
//   add 'dark' class
body.classList.toggle('dark');
  

setInterval(changeGradient, 5000); // Change gradient every 5 seconds

changeGradient(); // Trigger initial change
  //   check check
 console.log("ok?");
});