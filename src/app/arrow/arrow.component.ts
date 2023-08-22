import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  @Input() direction: 'left' | 'right';
  observer: IntersectionObserver;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.observeScroll(this.direction);
  }

  observeScroll(direction: string): void {
    // const options = {rootMargin: "-200px"};
    const options = {threshold: 0.5};

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const arrow = entry.target.querySelector(`.arrow-position-${direction}`);

        if (entry.isIntersecting) {
          arrow.classList.add(`move-${direction}`);
          return; // if we added the class, exit the function
        }

        // No intersecting, remove the class!
        arrow.classList.remove(`move-${direction}`);
      });
    }, options);

    const arrowElement = this.elementRef.nativeElement.querySelector('.arrow-section');
    this.observer.observe(arrowElement);
  }
}
