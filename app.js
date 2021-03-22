const mobileMenu = document.querySelector('#mobile-menu')
const navbarMenu = document.querySelector('.navbar_menu')    
// querySelector is used for class   // class name and all which is not possible for getbyId

const togglemobileMenu = () => {
    mobileMenu.classList.toggle('is-active')
    navbarMenu.classList.toggle('active')

}

mobileMenu.addEventListener('click',togglemobileMenu)
