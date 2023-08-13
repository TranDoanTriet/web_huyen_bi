"use strict";

var popUp = document.getElementById('popup-vote-info');
var listArr = [];
var checkboxs = document.querySelectorAll('.Checkbox');
var list = document.getElementById('inraketqua');
var totalSelection = document.getElementById('tongsoluachon');
var totalPoint = document.getElementById('tongdiem'); // let diemdanhap = document.getElementById('diemdanhap').value
// console.log(diemdanhap)

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = checkboxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var checkbox = _step.value;
    checkbox.addEventListener('click', function () {
      var _this = this;

      if (this.checked == true) {
        listArr.push(this.value);
        list.innerHTML = listArr.join(',');
        totalSelection.innerHTML = listArr.length;
      } else {
        listArr = listArr.filter(function (item) {
          return item != _this.value;
        });
        list.innerHTML = listArr.join(',');
        totalSelection.innerHTML = listArr.length;
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function getValue() {
  var diemdanhap = document.getElementById('diemdanhap');
  var valueinput = diemdanhap.value;
  totalPoint.innerHTML = Number(valueinput) * listArr.length;
}

function openPopup() {
  popUp.style.visibility = 'visible';
  popUp.style.top = '50%';
  popUp.style.transform = 'translate(-50%,0) scale(1)';
}

function closePopup() {
  popUp.style.visibility = 'hidden';
  popUp.style.top = '0';
  popUp.style.transform = 'translate(-50%,-50%) scale(0.1)';
}