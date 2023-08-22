export class Storage {
  public static toggleMenu: boolean = false;
  public static isDesktop: boolean = true;

  static setToggleMenu(value: boolean): void {
    Storage.toggleMenu = value;
  }

  static getToggleMenu(): boolean {
    return Storage.toggleMenu;
  }

  static checkIfDesktop(): boolean {
    return window.innerWidth >= 901;
  }

  static checkIfMobile(): boolean{
    return window.innerWidth <=900;
  }

  static scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


