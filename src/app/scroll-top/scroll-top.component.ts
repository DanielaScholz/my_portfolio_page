import { Component, OnInit, ElementRef } from '@angular/core';
import { Storage } from '../modules/storage';


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent   {
  Storage: any = Storage;
  observer: IntersectionObserver;

  constructor(private elementRef: ElementRef) { }


  // // imageSrc = '../../assets/img/scroll-top/arrow-scroll-top-default.svg';
  // imageSrc = ['../../assets/img/scroll-top/arrow-scroll-top-default.svg', '../../assets/img/scroll-top/arrow-scroll-top-large.svg'];
  // index = 0;
  // hover = false;

  // onHover() {
  //     this.hover = true;
  //     this.index = 1;
  //     this.imageSrc[this.index];
  // }

  // onLeave() {
  //   this.hover = false;
  //   this.index = 0 
  //   this.imageSrc[this.index];
  // }

  ngOnInit(): void {
    this.observeScroll();
  }

    observeScroll(): void {
      // const options = {rootMargin: "-200px"};
      const options = {threshold: 0.9};
      const box = this.elementRef.nativeElement.querySelectorAll('.arrow-box');

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let picture = entry.target.querySelector('.scroll-top-arrow');

          if (entry.isIntersecting) {
            picture.classList.add('show');
          } else{
            picture.classList.remove('show');
          }
          });
      }, options);

      box.forEach((elem: Element) => {
        this.observer.observe(elem);
      })
    }


}
