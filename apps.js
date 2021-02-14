const jsHeader = document.querySelector('header');
const jsNavHamburger = document.querySelector('.nav--bar--hamburger');
const jsNavBar_ul_sm = document.querySelector('.nav-bar--ul--sm');
const min400MediaQuery = window.matchMedia('(min-width: 420px)');
// jsNavHamburger.style.backgroundColor = 'red';


jsNavHamburger.addEventListener('click',()=>{
    jsNavBar_ul_sm.classList.toggle('show'); // shows the nav link
    jsHeader.classList.toggle('show'); // change the height to auto
})

let  checkCurrentSize = (matchMe) => {
    if(matchMe.matches){
        // this remove the class that was activated
        jsNavBar_ul_sm.classList.remove('show');
        jsHeader.classList.remove('show');
    }

}

min400MediaQuery.addEventListener('change',checkCurrentSize)
// checkCurrentSize(min400MediaQuery);