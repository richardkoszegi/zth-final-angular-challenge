export class Stopper {
    seconds: number = 0;
    roundTimes: number[];

    countInterval: number = 1000;

    interval;

    constructor() {
        this.seconds = 0;
        this.roundTimes = [];
        this.interval = 1000;
    }

    startTimer() {
        this.interval = setInterval(() => this.seconds++, this.countInterval);
        this.roundTimes = [];
      }
    
      stopTimer() {
        clearInterval(this.interval);
      }
    
      resetTimer() {
        this.stopTimer();
        this.seconds = 0;
      }
    
      roundTime() {
        if ( this.roundTimes.length == 0 ) {
          this.roundTimes.push(this.seconds);
        } else {
          const lastTime = this.roundTimes[this.roundTimes.length - 1];
          const newTime = this.seconds - lastTime;
          this.roundTimes.push(newTime);
        }
      }
    
      speedUpTimer() {
        this.countInterval = this.countInterval / 2;
        clearInterval(this.interval);
        this.interval = setInterval(() => this.seconds++, this.countInterval);
      }
    
      speedDownTimer() {
        this.countInterval = this.countInterval * 2;
        clearInterval(this.interval);
        this.interval = setInterval(() => this.seconds++, this.countInterval);
      }
}