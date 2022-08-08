// activador de menu en mobile
const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__menu");

navButton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu--visible");
})