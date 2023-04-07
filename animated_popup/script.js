const submitbtn = document.getElementById('submit');
const closebtn = document.getElementById('close');
const popup = document.querySelector('.popupContainer')

submitbtn.addEventListener('click', function () {
    popup.classList.add('popupActive')
})

closebtn.addEventListener('click',function () {
    popup.classList.remove('popupActive')
})