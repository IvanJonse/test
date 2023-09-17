import logoImage from '../assets/logo.svg'
import menuImage from '../assets/menu.svg'

const logoHeader = document.getElementById("logoHeader");
const menuHeader = document.getElementById("menuHeader");

logoHeader.src = logoImage

menuHeader.src = menuImage

const menuToggle = document.getElementById("App__header__menu");
const closeIcon = document.getElementById("App__isOpen__close");
const menu = document.getElementById("App__isOpen");

menuToggle.addEventListener("click", function () {
        menu.style.display = 'block'
        menu.style.transform = 'translateX(0%)'
        menuToggle.style.display = 'none'
    }
)

closeIcon.addEventListener("click", function () {
        menu.style.transform = 'translateX(100%)'
        menuToggle.style.display = 'flex'
        menu.style.display = 'none'
    }
)
