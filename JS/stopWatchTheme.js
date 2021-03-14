var themeColours = document.querySelector(':root');
var themeSwitch;
document.addEventListener("DOMContentLoaded", (event) => {
    themeSwitch = document.getElementById("themeSwitch");
    themeSwitch.onchange = function () { themeChange(themeSwitch.checked) };
    // themeChange(themeSwitch.checked)
});

function themeChange(checked) {
    document.body.classList.toggle('dark');
    document.getElementById('stopwatchText').classList.toggle('dark');
    themeToggleByClassName('stopwatchButton');
    themeToggleByClassName('slider round');
    themeToggleByClassName('lap');
    if (checked) {
        themeColours.style.setProperty('--buttonBorderColour', '#ECEFF1');
    } else {
        themeColours.style.setProperty('--buttonBorderColour', '#263238');
    }
}

function themeToggleByClassName(classname){
    Array.from(document.getElementsByClassName(classname)).forEach(element => {
        element.classList.toggle('dark');
    });
}