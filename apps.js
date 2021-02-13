const jsHeader = document.querySelector('header');
const jsNavHamburger = document.querySelector('.nav--bar--hamburger');
const jsNavBar_ul_sm = document.querySelector('.nav-bar--ul--sm');
// jsNavHamburger.style.backgroundColor = 'red';



jsNavHamburger.addEventListener('click',()=>{
    jsNavBar_ul_sm.classList.toggle('show');
    jsHeader.classList.toggle('show');
})