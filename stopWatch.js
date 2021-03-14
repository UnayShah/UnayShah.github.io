var stopwatchText;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var running = false;
var newTimer = true;
var startButton;
var stopButton;
var lapButton;
var clearButton;
var lapList;

document.addEventListener("DOMContentLoaded", (event) => {
    stopwatchText = document.getElementById("stopwatchText")
    startButton = document.getElementById("startButton");
    stopButton = document.getElementById("stopButton");
    lapButton = document.getElementById("lapButton");
    lapList = document.getElementById("lapList");
    clearButton = document.getElementById("clearButton");
    startButton.onclick = function () { startStopwatch() };
    stopButton.onclick = function () { stopStopwatch() };
    lapButton.onclick = function () { lapStopwatch() };
    clearButton.onclick = function () { clearStopwatch() };
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
    if (newTimer) {
        clearStopwatch();
    }
    if (!running) {
        running = true;
        startButton.innerHTML = "PAUSE"
        stopButton.style.opacity = 1;
        stopButton.className = "stopwatchButton";
        newTimer = false;
        timerRunning();
    }
    else {
        stopButton.className = "stopwatchButton";
        startButton.innerHTML = "RESUME"
        running = false;
    }
}

function stopStopwatch() {
    running = false;
    newTimer = true;
    startButton.innerHTML = "START"
    stopButton.style.opacity = 0.2;
    stopButton.className = "stopwatchButton disabled";
    resetStopwatch();
}
function timerRunning() {
    if (running) {
        milliseconds += 1;
        stopwatchText.innerHTML = getStopwatchText();
        setTimeout(function () { timerRunning() }, 10);
    }
}

function lapStopwatch() {
    if (running) {
        const lapDiv = document.createElement("div");
        if (!document.getElementById("themeSwitch").checked)
            lapDiv.className = "lap";
        else
            lapDiv.className = "lap dark";
        lapDiv.innerHTML = getStopwatchText();
        lapList.appendChild(lapDiv);
    }
}

function clearStopwatch() {
    if (!running && startButton.innerHTML === "START") {
        while (lapList.firstChild) {
            lapList.removeChild(lapList.firstChild);
        }
    }
}
function resetStopwatch() {
    hours = minutes = seconds = milliseconds = 0;
    stopwatchText.innerHTML = getStopwatchText();
}