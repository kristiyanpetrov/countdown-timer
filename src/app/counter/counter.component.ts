import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() {
  }

  countDownDate = new Date('december 31, 2020 23:59:59').getTime();
  countDownDuration: any;
  message = 'Happy New Year! 2021'

  ngOnInit(): void {
  }

  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countDownDuration = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    if (distance < 0) {
      clearInterval(this.x);
      this.countDownDuration = this.message;
    }
  });

}
