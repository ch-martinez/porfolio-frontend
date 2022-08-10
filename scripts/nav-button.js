// activador de menu en mobile
const navButton = document.querySelector(".button--nav");
const navMenu = document.querySelector(".nav__menu");
const header = document.querySelector(".header")

navButton.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu--visible");
    header.classList.toggle("header--mobile")
})

//Hace que se cierre el menu al hacer click
document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click",() => {
    navMenu.classList.remove("nav__menu--visible");
    header.classList.remove("header--mobile");
}))
