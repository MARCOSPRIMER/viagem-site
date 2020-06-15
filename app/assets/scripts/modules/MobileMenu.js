class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }
  
  
  events(){
    this.menuIcon.addEventListener("click", () => {
      this.toggleTheMenu()
    })
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header--is-expanded")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }

}




/*document.querySelector(".site-header__menu-icon").addEventListener("click", function() {
      console.log("The top right icons was clicled")
    })*/
export default MobileMenu;