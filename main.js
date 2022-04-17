let PhoneMenuOpenButton = document.querySelector('.header__PhoneList');
let PhoneMenuDisplay = document.querySelector('.PhoneMenu');

function OpenPhoneMenu(){
    PhoneMenuOpenButton.style.display = 'none';
    PhoneMenuDisplay.style.display = 'flex';
}
function ClosePhoneMenu(){
    PhoneMenuOpenButton.style.display = 'block';
    PhoneMenuDisplay.style.display = 'none';
}