class Stopwatch {
    constructor(display, lapList) {
        this.display = display;
        this.lapList = lapList;
        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.lapCount = 0;
    }

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.elapsedTime;
            this.timerInterval = setInterval(this.update.bind(this), 10);
            this.isRunning = true;
        }
    }

    pause() {
        if (this.isRunning) {
            clearInterval(this.timerInterval);
            this.isRunning = false;
        }
    }

    reset() {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        this.elapsedTime = 0;
        this.display.innerText = '00:00:00';
        this.lapList.innerHTML = '';
        this.lapCount = 0;
    }

    recordLap() {
        if (this.isRunning) {
            this.lapCount++;
            const lapTime = this.formatTime(this.elapsedTime);
            const lapItem = document.createElement('li');
            lapItem.textContent = `Lap ${this.lapCount}: ${lapTime}`;
            this.lapList.appendChild(lapItem);
        }
    }

    update() {
        this.elapsedTime = Date.now() - this.startTime;
        this.display.innerText = this.formatTime(this.elapsedTime);
    }

    formatTime(ms) {
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const seconds = Math.floor((ms / 1000) % 60);
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    }

    pad(value) {
        return value < 10 ? '0' + value : value;
    }
}

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

const stopwatch = new Stopwatch(display, lapList);

document.getElementById("startBtn").addEventListener("click", () => stopwatch.start());
document.getElementById("pauseBtn").addEventListener("click", () => stopwatch.pause());
document.getElementById("resetBtn").addEventListener("click", () => stopwatch.reset());
document.getElementById("lapBtn").addEventListener("click", () => stopwatch.recordLap());
