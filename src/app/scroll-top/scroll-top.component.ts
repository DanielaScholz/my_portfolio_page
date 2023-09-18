import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Storage } from '../modules/storage';


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements AfterViewInit{
  Storage: any = Storage;
  // observer: IntersectionObserver;


  @ViewChild('scrollTop') scrollTop!: ElementRef;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   // Hier können Sie den Code ausführen, der auf das Scroll-Ereignis reagieren soll.
  //   console.log('Gescrollt!');
  // }


  ngAfterViewInit(): void {
    this.observeScroll();
  }

  observeScroll(){
    let scrollTop = this.scrollTop.nativeElement;
    let scrollPos1 = window.scrollY;

    window.addEventListener('scroll', ()=>{
      let scrollPos2 = window.scrollY;
      let diff = scrollPos1 - scrollPos2;
      scrollPos1 = scrollPos2;


      if (diff > 0 && scrollY >200 ) {
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
      }
    })
  }





  // observeScroll(): void {
  //   // const options = {rootMargin: "-200px"};
  //   const options = {threshold: 0.9};
  //   const box = this.elementRef.nativeElement.querySelectorAll('.arrow-box');

  //   this.observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       let picture = entry.target.querySelector('.scroll-top-arrow');

  //       if (entry.isIntersecting) {
  //         picture.classList.add('show');
  //       } else{
  //         picture.classList.remove('show');
  //       }
  //       });
  //   }, options);

  //   box.forEach((elem: Element) => {
  //     this.observer.observe(elem);
  //   })
  // }


}
