document.addEventListener('DOMContentLoaded', function () {
    class Timer {
        constructor(durationInSeconds) {
            this.durationInSeconds = durationInSeconds;
            this.timerElement = document.getElementById('timer');
            this.intervalId = null;
            this.updateDisplay();
        }

        start() {
            this.intervalId = setInterval(() => {
                this.durationInSeconds--;
                this.updateDisplay();

                if (this.durationInSeconds <= 0) {
                    this.stop();
                }
            }, 1000);
        }

        stop() {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        updateDisplay() {
            const minutes = Math.floor(this.durationInSeconds / 60);
            const seconds = this.durationInSeconds % 60;
            const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            this.timerElement.textContent = formattedTime;
        }
    }

    const initialDurationInSeconds = 87;

    const timer = new Timer(initialDurationInSeconds);

    timer.start();
});