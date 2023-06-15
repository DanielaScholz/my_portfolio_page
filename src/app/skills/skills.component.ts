import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'CSS', 'Firebase', 'Git', 'Scrum', 'Rest-Api', 'Material Design'];
arrow = [1 , 2, 3];

// animateArrow(){


// }

// animateArrow() {


//   const arrowImage = document.querySelector('.animated-arrow');
//   arrowImage.classList.add('hover');
//   arrowImage.addEventListener('transitionend', () => {
//     arrowImage.setAttribute('src', '../../assets/img/arrow/arrow-left/3.svg');
//     arrowImage.classList.remove('hover');
//   }, { once: true });

// }

}
