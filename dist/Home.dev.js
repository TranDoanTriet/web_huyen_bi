"use strict";

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
var style = document.createElement('style');
var position = 'right';
style.innerHTML = "\n    @keyframes my-animation{\n        0%{".concat(position, ": -").concat(document.querySelector('.text').offsetWidth + 10, "px;}\n        100%{").concat(position, ":100%;}\n    }\n");
document.head.append(style);