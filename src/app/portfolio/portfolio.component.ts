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
      img: '../../assets/img/portfolio/Join.PNG',
      description: 'A task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      category: ['JavaScript', ' HTML', ' CSS'],
      github: 'https://github.com/DanielaScholz/join',
      liveTest: 'https://daniela-scholz.at/projects/join/',
    },
    {
      id: 2,
      name: 'El pollo loco',
      img: '../../assets/img/portfolio/El_pollo_loco.PNG',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe collect coins and bottles to fight against crazy chicken.',
      category: ['JavaScript', ' HTML', ' CSS'],
      github: 'https://github.com/DanielaScholz/el_pollo_loco',
      liveTest: 'https://daniela-scholz.at/projects/el_pollo_loco/',
    },
    {
      id: 3,
      name: 'Ring of fire',
      img: '../../assets/img/portfolio/Ring_of_fire.PNG',
      description: 'A popular card drinking gmae based on Angular and using the Firebase.',
      category: ['Angular', ' TypeScript', ' HTML', ' SCSS', ' Firebase'],
      github: 'https://github.com/DanielaScholz/ringoffire',
      liveTest: 'http://daniela-scholz.at/projects/ringoffire/',
    },
    {
      id: 4,
      name: 'PokéDex',
      img: '../../assets/img/portfolio/PokéDex.PNG',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      category: ['JavaScript', ' HTML', ' CSS', ' API'],
      github: 'https://github.com/DanielaScholz/pokedex',
      liveTest: 'http://daniela-scholz.at/projects/pokedex/',
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
        let headline = entry.target.querySelector('#portfolio');
        let arrow = entry.target.querySelector('.decoration-arrow');

        let isOdd = this.isOdd(parseInt(entry.target.id));

        //Intersecting, add class!
        if (entry.isIntersecting) {
          projectPic.classList.add('color');
          projectInfo.classList.add('slide-in');
          frame.classList.add('show');
          // headline.classList.add('highlight');
          arrow.classList.add(isOdd ? 'animate-arrow-right' : 'animate-arrow-left');

          //No intersecting, remove the class!
        } else {
          projectPic.classList.remove('color');
          projectInfo.classList.remove('slide-in');
          frame.classList.remove('show');
          // headline.classList.remove('highlight');
          arrow.classList.remove(isOdd ? 'animate-arrow-right' : 'animate-arrow-left');
        }
      });
    }, option);

    box.forEach((box: Element) => {
      this.observer.observe(box);
    })



    // const headlineBox = this.elementRef.nativeElement.querySelector('.headline-box');
    // this.observer.observe(headlineBox);
  }
}