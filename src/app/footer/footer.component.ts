import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contacts = {
    "name": ['Github', 'Linkedin'],
    "url": ['https://github.com/DanielaScholz', 'https://linkedin.com/in/daniela-scholz-369743281']
  };

}
