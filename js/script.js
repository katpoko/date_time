// Get link/button/toggle
// Get the <body>

const lightDark = document.querySelector('a');
const body = document.querySelector('body');


// Manually add dark class
body.classList.add('dark');

// SETTING
// Add 'dark' class
// body.classList.add('dark');

lightDark.addEventListener('click', ()=> {

//   add 'dark' class
body.classList.toggle('dark');
  
  //   check check
 console.log("ok?");
});