// header animation
const header = document.getElementById('header');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    if(lastScrollTop - scrollY < 0){
        header.classList.remove('showHeader')
    }else if(lastScrollTop - scrollY > 0){
        header.classList.add('showHeader')
    }
    lastScrollTop = scrollY;
    window.pageYOffset>header.clientHeight ? header.classList.add('hideHeader') : header.classList.remove('hideHeader');
})

// mennu
const openNavbar = document.querySelector('.openNavbar');
const closeNavbar = document.querySelector('.closeNavbar');
openNavbar.addEventListener('click', function(){
    header.classList.add('active')
})
closeNavbar.addEventListener('click', function(){
    header.classList.remove('active')
})