import { Component, OnInit } from '@angular/core';
import { Storage } from '../modules/storage';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  isDesktop: boolean;

  ngOnInit() {
    this.isDesktop = Storage.checkIfDesktop();
    window.addEventListener('resize', () => {
      this.isDesktop = Storage.checkIfDesktop();
    });

  }

}
