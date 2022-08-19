const notification = document.querySelector('.notification');
const btnAdd = document.querySelector('.add__button');
const btnCTA = document.querySelector('.cta__button');

btnAdd.addEventListener('click',()=>{
    notification.classList.remove('hidden');
    notification.classList.add('show');
})

btnCTA.addEventListener('click',()=>{
    notification.classList.add('hidden');
    notification.classList.remove('show');
})


