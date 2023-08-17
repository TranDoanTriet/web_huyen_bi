
let popUp = document.getElementById('popup-account-info')
let popUpWidraw = document.getElementById('popup-account-widraw')
let popUpWidrawSuccess = document.getElementById('popup-account-widraw-success')
function openPopup(){
    popUp.style.visibility = 'visible'
    popUp.style.top = '50%'
    popUp.style.transform = 'translate(-50%,-50%) scale(1)'
}
function closePopup(){
    popUp.style.visibility = 'hidden'
    popUp.style.top = '0'
    popUp.style.transform = 'translate(-50%,-50%) scale(0.1)'
}
function openPopupWidraw(){
    popUpWidraw.style.visibility = 'visible'
    popUpWidraw.style.top = '50%'
    popUpWidraw.style.transform = 'translate(-50%,-50%) scale(1)'
}
function closePopupWidraw(){
    popUpWidraw.style.visibility = 'hidden'
    popUpWidraw.style.top = '0'
    popUpWidraw.style.transform = 'translate(-50%,-50%) scale(0.1)'
    popUpWidrawSuccess.style.display = 'block'
}

function closePopupWidrawSuccess(){
    popUpWidrawSuccess.style.display = 'none'
}

