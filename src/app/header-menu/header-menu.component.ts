import { Component, OnInit } from '@angular/core';
import { Storage } from '../modules/storage';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit  {
  isDesktop: boolean;
  toggleMenu: boolean;

  ngOnInit() {
    this.isDesktop = Storage.checkIfDesktop();
    window.addEventListener('resize', () => {
      this.isDesktop = Storage.checkIfDesktop();
    });
  }

  toggleMobileMenu(): void {
    Storage.setToggleMenu(!Storage.getToggleMenu());
    this.toggleMenu = !this.toggleMenu;
  }

  closeMenu() {
    Storage.setToggleMenu(!this.toggleMenu);
    this.toggleMenu = Storage.toggleMenu;
  }


}
