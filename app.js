const mobileMenu = document.querySelector('#mobile-menu')
const navbarMenu = document.querySelector('.navbar_menu') 
const navbarLogo = document.querySelector('#navbar_logo')

// querySelector is used for class   // class name and all which is not possible for getbyId

//if(window.innerWidth <= 580) {
//    document.getElementById('sign_content').style.order = 2
//}  tried this but didn't work

const togglemobileMenu = () => {
    mobileMenu.classList.toggle('is-active')
    navbarMenu.classList.toggle('active')

}

mobileMenu.addEventListener('click',togglemobileMenu)

//  Show active menu

const highlightMenu = () => {
    const elem = document.querySelector('.highlight') 
    const home = document.querySelector('#home-page') 
    const about = document.querySelector('#about-page') 
    const services= document.querySelector('#service-page') 
    const signup= document.querySelector('#sign-up-page')
    let scrollPos = window.scrollY

    // adds 'highlight class to my menu items
    if(window.innerWidth > 960 && scrollPos < 500) {
        home.classList.add('highlight')   
        about.classList.remove('highlight')  // when going from about to home you have to remove
        // beyond 600px home is not seen 
        return // if condition is satisfied dont go any further
    }

    else if (window.innerWidth > 960 && scrollPos < 1250) {
        about.classList.add('highlight')
        home.classList.remove('highlight')
        services.classList.remove('highlight')
        return // if condition is satisfied dont go any further
    }
    else if (window.innerWidth > 960 && scrollPos < 2000) {
        about.classList.remove('highlight')
        services.classList.add('highlight')
        return // if condition is satisfied dont go any further
    }
    
    
if( (elem && window.innerWidth > 960 && scrollPos <500 ) || elem){
    elem.classList.remove('highlight')
    // didn't understand this
}
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

const hideMobilemenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 960 && menuBars) {
        mobileMenu.classList.toggle('is-active')
        navbarMenu.classList.remove('active')
    }
}

navbarMenu.addEventListener('click', hideMobilemenu)
navbarLogo.addEventListener('click', hideMobilemenu)
