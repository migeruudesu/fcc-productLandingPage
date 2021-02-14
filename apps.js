const jsHeader = document.querySelector('header');
const jsNavHamburger = document.querySelector('.nav--bar--hamburger');
const jsNavBar_ul_sm = document.querySelector('.nav-bar--ul--sm');
const min400MediaQuery = window.matchMedia('(min-width: 400px)');
const jsHeader2 = document.querySelector('#header');
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

//this is for changing the color of nav when scrolled

window.onscroll = function() {runOnScroll(min400MediaQuery)};
// window.onscroll = runOnScroll(min400MediaQuery);
let runOnScroll = (windowSize) => {
    if(windowSize.matches){
        if (document.documentElement.scrollTop > 20) {
            jsHeader.style.backgroundColor = "rgb(196, 196, 196)";
            //changeFontColorToWhite();
            // jsHeader.classList.add('color');
            // console.log('down');
        } else if(document.documentElement.scrollTop <= 20) {
            jsHeader.style.backgroundColor = "transparent";
            //changeFontColorToBlack();
            // jsHeader.classList.remove('color');
            // console.log('up');
        }
      }else {jsHeader.style.backgroundColor = "rgb(196, 196, 196)";}
}

min400MediaQuery.addEventListener('onscroll',runOnScroll);