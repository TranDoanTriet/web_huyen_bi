"use strict";

var popUp = document.getElementById('popup-account-info');

function openPopup() {
  popUp.style.visibility = 'visible';
  popUp.style.top = '50%';
  popUp.style.transform = 'translate(-50%,-50%) scale(1)';
}

function closePopup() {
  popUp.style.visibility = 'hidden';
  popUp.style.top = '0';
  popUp.style.transform = 'translate(-50%,-50%) scale(0.1)';
}