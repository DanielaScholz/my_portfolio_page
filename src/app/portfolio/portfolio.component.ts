import { Component, OnInit, ElementRef } from '@angular/core';
import { Storage } from '../modules/storage';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})

export class PortfolioComponent implements OnInit {
  constructor(private elementRef: ElementRef) { }
  observer: IntersectionObserver;
  Storage: any = Storage;

  projects = [
    {
      id: 1,
      name: 'Join',
      img: 'assets/img/portfolio/Join.PNG',
      description: 'A task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      category: ['JavaScript', ' HTML', ' CSS'],
      github: 'https://github.com/DanielaScholz/join',
      liveTest: 'https://daniela-scholz.at/projects/join/index.html',
    },
    {
      id: 2,
      name: 'El pollo loco',
      img: 'assets/img/portfolio/El_pollo_loco.PNG',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe collect coins and bottles to fight against crazy the chicken.',
      category: ['JavaScript', ' HTML', ' CSS'],
      github: 'https://github.com/DanielaScholz/el_pollo_loco',
      liveTest: 'https://daniela-scholz.at/projects/el_pollo_loco/',
    },
    {
      id: 3,
      name: 'Simple-CRM',
      img: 'assets/img/portfolio/Simple_CRM.PNG',
      description: 'A simple Customer Relationship Management system working with CRUD functionality',
      category: ['Angular', ' TypeScript', ' HTML', ' SCSS', ' Firebase'],
      github: 'https://github.com/DanielaScholz/simple-crm',
      liveTest: 'https://crm.daniela-scholz.at/simple-crm/',
    },
    {
      id: 4,
      name: 'PokéDex',
      img: 'assets/img/portfolio/PokéDex.PNG',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      category: ['JavaScript', ' HTML', ' CSS', ' API'],
      github: 'https://github.com/DanielaScholz/pokedex',
      liveTest: 'https://daniela-scholz.at/projects/pokedex/src/intro/intro.html',
    }
  ]

  ngOnInit(): void {
      setTimeout(() => {
      if (this.Storage.checkIfMobile()) {
        this.observeScroll({threshold: 0.4})
      }
        this.observeScroll({threshold: 0.8});
      }, 100);
  }

  isOdd(i: number): boolean {
    return i % 2 === 1;
  }

  observeScroll(options): void {
    let option = options;
    let box = this.elementRef.nativeElement.querySelectorAll('.project-box');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        let projectPic = entry.target;
        let projectInfo = entry.target.lastElementChild;
        let frame = entry.target.querySelector('.frame');
        let arrow = entry.target.querySelector('.decoration-arrow');

        let isOdd = this.isOdd(parseInt(entry.target.id));

        //Intersecting, add class!
        if (entry.isIntersecting) {
          projectPic.classList.add('color');
          projectInfo.classList.add('slide-in');
          frame.classList.add('show');
          arrow.classList.add(isOdd ? 'animate-arrow-right' : 'animate-arrow-left');

          //No intersecting, remove the class!
        } else {
          projectPic.classList.remove('color');
          projectInfo.classList.remove('slide-in');
          frame.classList.remove('show');
          arrow.classList.remove(isOdd ? 'animate-arrow-right' : 'animate-arrow-left');
        }
      });
    }, option);

    box.forEach((box: Element) => {
      this.observer.observe(box);
    })
  }
}