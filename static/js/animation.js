// mennu
const openNavbar = document.querySelector('.openNavbar');
const closeNavbar = document.querySelector('.closeNavbar');

openNavbar.addEventListener('click', function(){
    header.classList.add('active')
})
closeNavbar.addEventListener('click', function(){
    header.classList.remove('active')
})