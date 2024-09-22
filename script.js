let timerInterval;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById('display');
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    display.innerText = `
        ${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:
        ${String(secs).padStart(2, '0')}
    `.replace(/\s/g, '');
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
