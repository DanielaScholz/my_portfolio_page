import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {
  observer: IntersectionObserver;
  Storage: any = Storage;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.observeScroll();
  }

    observeScroll(): void {
      //const options = {rootMargin: "-200px"};
      const options = {threshold: 0.3};
      const box = this.elementRef.nativeElement.querySelectorAll('.picture-box');

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let picture = entry.target.querySelector('.decoration-frame');

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

