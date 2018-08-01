import { Component, OnInit } from '@angular/core';
import { Stopper } from './stopper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  stoppers: Stopper[] = [];

  ngOnInit() {
    this.addStopper();
  }

  addStopper() {
    this.stoppers.push(new Stopper());
  }

  startCountDown(interval: number) {
    setTimeout(() => alert('Count Down Timeout'), interval * 1000);
  }
}
