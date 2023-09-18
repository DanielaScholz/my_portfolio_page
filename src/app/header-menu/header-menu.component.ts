import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Storage } from '../modules/storage';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit, AfterViewInit {
  isDesktop: boolean;
  toggleMenu: boolean;
  @ViewChild('desktopNav') desktopNav!: ElementRef;
  @ViewChild('mobileNav') mobileNav!: ElementRef;

  ngOnInit() {
    this.isDesktop = Storage.checkIfDesktop();
    window.addEventListener('resize', () => {
      this.isDesktop = Storage.checkIfDesktop();
    });
  }

  ngAfterViewInit(): void {
    if (this.isDesktop) {
      this.showHideNav(this.desktopNav.nativeElement);
    } else {
      this.showHideNav(this.mobileNav.nativeElement);
    }
  }

  toggleMobileMenu(): void {
    Storage.setToggleMenu(!Storage.getToggleMenu());
    this.toggleMenu = !this.toggleMenu;
  }

  closeMenu() {
    Storage.setToggleMenu(!this.toggleMenu);
    this.toggleMenu = Storage.toggleMenu;
  }

  showHideNav(elem: any) {
    let scrollPos1 = window.scrollY;
    let navigation = elem;

    window.addEventListener('scroll', () => {
      let scrollPos2 = window.scrollY;
      let diff = scrollPos1 - scrollPos2;
      scrollPos1 = scrollPos2;


      if (diff > 0 && scrollY > 150) {
        navigation.classList.add('show')
      } else {
        navigation.classList.remove('show');
      }
    })
  }
}
