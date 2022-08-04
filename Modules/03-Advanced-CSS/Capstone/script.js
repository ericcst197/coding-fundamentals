const navigation = document.querySelector('.navigation__mobile-nav');
const navCheckbox = document.getElementById("navi-toggle");
const navCloseLink = navigation.querySelector('#close_menu');

const headerCTA = document.querySelector('.header__cta');
const overlay = document.querySelector('.overlay');
const contactCard = document.querySelector('.contact__card');
const contactBtnClose = document.querySelectorAll('.card__btn-close');

navCloseLink.onclick = function closeNav() {
    navCheckbox.checked = false;
};

headerCTA.addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.remove('hidden');
    contactCard.classList.remove('hidden');

});

contactBtnClose.forEach(btn=>{
        btn.addEventListener('click', function (){
        overlay.classList.add('hidden');
        contactCard.classList.add('hidden');
    })
})
