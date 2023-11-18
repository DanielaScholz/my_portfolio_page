import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Storage } from '../modules/storage';


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements AfterViewInit {
  Storage: any = Storage;


  @ViewChild('scrollTop') scrollTop!: ElementRef;

  ngAfterViewInit(): void {
    this.observeScroll();
  }

  observeScroll() {
    let scrollTop = this.scrollTop.nativeElement;
    let scrollPos1 = window.scrollY;

    window.addEventListener('scroll', () => {
      let scrollPos2 = window.scrollY;
      let diff = scrollPos1 - scrollPos2;
      scrollPos1 = scrollPos2;


      if (diff > 0 && scrollY > 200) {
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
      }
    })
  }
}
