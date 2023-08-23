import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  images = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index++;
      this.index = this.index % this.images.length;
    }, 150);
  }
}
