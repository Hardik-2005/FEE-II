// Stopwatch Variables
let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

// Stopwatch Functions
function startStopwatch() {
    if (isStopwatchRunning) return;
    isStopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
}

function pauseStopwatch() {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById("stopwatch-display").textContent = 
        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Pomodoro Variables
let pomodoroInterval;
let pomodoroTime = 1500; // 25 minutes
let isPomodoroRunning = false;

// Pomodoro Functions
function startPomodoro() {
    if (isPomodoroRunning) return;
    isPomodoroRunning = true;
    pomodoroInterval = setInterval(() => {
        pomodoroTime--;
        updatePomodoroDisplay();
        if (pomodoroTime === 0) {
            clearInterval(pomodoroInterval);
            isPomodoroRunning = false;
            alert("Time's up! Take a break or start another session.");
        }
    }, 1000);
}

function pausePomodoro() {
    isPomodoroRunning = false;
    clearInterval(pomodoroInterval);
}

function resetPomodoro() {
    isPomodoroRunning = false;
    clearInterval(pomodoroInterval);
    pomodoroTime = 1500; // Reset to 25 minutes
    updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    document.getElementById("pomodoro-display").textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

// Utility function to pad single-digit numbers with leading zero
function padZero(num) {
    return num.toString().padStart(2, "0");
}
