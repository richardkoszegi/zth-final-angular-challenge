import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stopper';
  seconds: number = 0;

  interval;

  startTimer() {
    this.interval = setInterval(() => this.seconds++, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
