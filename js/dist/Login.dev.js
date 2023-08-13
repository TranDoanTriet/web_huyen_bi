"use strict";

var input = document.querySelector('.pswrd');
var input2 = document.querySelector('.pswrd2');
var show = document.querySelector('.show');
var show2 = document.querySelector('.show2');
show.addEventListener('click', active);
show2.addEventListener('click', active2);

function active() {
  if (input.type === "password") {
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "Ẩn";
  } else {
    input.type = "password";
    show.textContent = "Hiện";
    show.style.color = "#111";
  }
}

function active2() {
  if (input2.type === "password") {
    input2.type = "text";
    show2.style.color = "#1DA1F2";
    show2.textContent = "ẨN";
  } else {
    input2.type = "password";
    show2.textContent = "Hiện";
    show2.style.color = "#111";
  }
}