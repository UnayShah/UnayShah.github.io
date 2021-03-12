var stopwatchText;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var running = false;
var startButton;
var stopButton;

document.addEventListener("DOMContentLoaded", (event) => {
    stopwatchText = document.getElementById("stopwatchText")
    startButton = document.getElementById("startButton");
    stopButton = document.getElementById("stopButton");
    startButton.onclick = function () { startStopwatch() };
    stopButton.onclick = function () { stopStopwatch() };
    resetStopwatch();
    stopStopwatch();
});

Number.prototype.pad = function (size, value) {
    var sign = Math.sign(this) === -1 ? '-' : '';
    return sign + new Array(size).concat([Math.abs(this)]).join(value).slice(-size);
}

function getStopwatchText() {
    seconds += Math.floor(milliseconds / 100);
    milliseconds = milliseconds % 100;
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    return hours.pad(2, 0) + ':' + minutes.pad(2, 0) + ':' + seconds.pad(2, 0) + "." + milliseconds.pad(2, 0);
}

function startStopwatch() {
    if (!running) {
        running = true;
        startButton.innerHTML = "PAUSE"
        stopButton.style.opacity = 1;
        timerRunning();
    }
    else {
        startButton.innerHTML = "START"
        running = false;
    }
}

function stopStopwatch() {
    running = false;
    startButton.innerHTML = "START"
    stopButton.style.opacity = 0.5;
    resetStopwatch();
}
function timerRunning() {
    if (running) {
        milliseconds += 1;
        stopwatchText.innerHTML = getStopwatchText();
        setTimeout(function () { timerRunning() }, 10);
    }
}
function resetStopwatch() {
    hours = minutes = seconds = milliseconds = 0;
    stopwatchText.innerHTML = getStopwatchText();
}