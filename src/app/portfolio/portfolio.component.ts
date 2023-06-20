import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  // projects =['Join', 'El pollo loco', 'Ring of fire', 'PokéDex']

  projects = [
    {
      name: 'Join',
      img: '../../assets/img/portfolio/Join.PNG',
      description: 'A task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      category: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/DanielaScholz/join',
      liveTest: 'https://daniela-scholz.developerakademie.net/join/',
    },
    {
      name: 'El pollo loco',
      img: '../../assets/img/portfolio/El_pollo_loco.PNG',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe collect coins and bottles to fight against crazy chicken.',
      category: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/DanielaScholz/el_pollo_loco',
      liveTest: 'https://daniela-scholz.developerakademie.net/projekte/el_pollo_loco/',
    },
    {
      name: 'Ring of fire',
      img: '../../assets/img/portfolio/Ring_of_fire.PNG',
      description: 'A popular card drinking gmae based on Angular and using the Firebase.',
      category: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Firebase'],
      github: 'https://github.com/DanielaScholz/ringoffire',
      liveTest: 'https://daniela-scholz.developerakademie.net/projekte/ringoffire',
    },
    {
      name: 'PokéDex',
      img: '../../assets/img/portfolio/PokéDex.PNG',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      category: ['JavaScript', 'HTML', 'CSS', 'API'],
      github: 'https://github.com/DanielaScholz/pokedex',
      liveTest: 'https://daniela-scholz.developerakademie.net/projekte/pokedex',
    }
  ]

  isSecondElement(index: number): boolean {
    return index % 2 === 1;
  }

}
