"use strict";

var list = document.querySelectorAll('.li-list');

function activeLink() {
  var _this = this;

  list.forEach(function (item) {
    item.classList.remove('li-active');

    _this.classList.add('li-active');
  });
}

list.forEach(function (item) {
  item.addEventListener('click', activeLink);
});