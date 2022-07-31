// activador de menu en mobile
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
})