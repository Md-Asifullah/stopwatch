// Main timer counter
let time = 0;
// hms variables
let hours = 0;
let mins = 0;
let secs = 0;

let runStopWatch = false;

// Initialization
const playPauseBtn = document.querySelector(".playPause");
const restartBtn = document.querySelector(".restart");
const secondsHandle = document.querySelector(".seconds");
const hoursHandle = document.querySelector(".hours");
const minutesHandle = document.querySelector(".minutes");
const titleHandle = document.querySelector("title");

// functions
function timer() {
    if (runStopWatch) {
        time++;
        displayUpdatedTime();
        setTimeout(timer, 1000);
    }
}
function tooglerunStopWatch() {
    if (runStopWatch) {
        playPauseBtn.textContent = "▶";
    } else {
        playPauseBtn.textContent = "װ";
    }
    runStopWatch = !runStopWatch;
}

function restart() {
    runStopWatch = false;
    time = 0;
    displayUpdatedTime();
    playPauseBtn.textContent = "▶";
}

function displayUpdatedTime() {
    let tmpTimer = time;
    hours = Math.trunc(tmpTimer / 3600)
        .toString()
        .padStart(2, "0");
    hoursHandle.textContent = hours;
    tmpTimer = tmpTimer % 3600;
    //   console.log(tmpTimer);
    mins = Math.trunc(tmpTimer / 60)
        .toString()
        .padStart(2, "0");
    minutesHandle.textContent = mins;
    tmpTimer = tmpTimer % 60;
    secs = tmpTimer.toString().padStart(2, "0");
    secondsHandle.textContent = secs;
    titleHandle.textContent = `${hours}:${mins}:${secs} - Stopwatch ⏱`;
}

playPauseBtn.addEventListener("click", tooglerunStopWatch);
playPauseBtn.addEventListener("click", timer);

restartBtn.addEventListener("click", restart);
