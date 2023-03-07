const arrowBurger = document.querySelector('.header__menu');
const bodyBurger = document.querySelector('.header__mobile');
const logoBurger = document.querySelector('.header-inner');
arrowBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    if(bodyBurger.classList.contains('active3')){
        document.querySelector('.header-logo').src="img/header-logo-light.png";
        document.querySelector('.header-inner').classList.add('light')
    }
    else{
        document.querySelector('.header-logo').src="img/header-logo.svg";
        document.querySelector('.header-inner').classList.remove('light')
    }
});
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const link5 = document.querySelector('.link5');
const link6 = document.querySelector('.link6');
link1.addEventListener('click', closeLink);
link2.addEventListener('click', closeLink);
link3.addEventListener('click', closeLink);
link4.addEventListener('click', closeLink);
link5.addEventListener('click', closeLink);
link6.addEventListener('click', closeLink);
function closeLink(){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
    document.querySelector('.header-logo').src="img/header-logo.svg";
    document.querySelector('.header-inner').classList.remove('light')
}