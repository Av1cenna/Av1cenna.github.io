// Select elements
let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

// Add initial class for light mode
rootEle.classList.add("light-background");
toggleBtn.children[1].classList.add("displayNone");

// Toggle mode function
function modeToggle() {
    // Toggle dark background and light background
    rootEle.classList.toggle("dark-background");
    toggleBtn.classList.toggle("toggleBtnDarkMode");

    // Toggle visibility of the lightbulb images
    let lightbulbOff = toggleBtn.querySelector(".lightbulb-off");
    let lightbulbOn = toggleBtn.querySelector(".lightbulb-on");

    lightbulbOff.classList.toggle("displayNone");
    lightbulbOn.classList.toggle("displayNone");
}

