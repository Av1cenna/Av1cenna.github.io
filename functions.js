// Select elements
let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

// Add initial class for light mode
rootEle.classList.add("light-background");
toggleBtn.children[1].classList.add("displayNone");

// Function to toggle between light and dark modes
function modeToggle() {
    
    rootEle.classList.toggle("dark-background");
    toggleBtn.classList.toggle("toggleBtnDarkMode");

   
    let lightbulbOff = toggleBtn.querySelector(".lightbulb-off");
    let lightbulbOn = toggleBtn.querySelector(".lightbulb-on");

    lightbulbOff.classList.toggle("displayNone"); 
    lightbulbOn.classList.toggle("displayNone");  
}
