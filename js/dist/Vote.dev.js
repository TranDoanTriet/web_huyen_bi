"use strict";

var popUp = document.getElementById('popup-vote-info');
var listArr = [];
var checkboxs = document.querySelectorAll('.Checkbox');
var listVote = document.getElementById('inraketqua');
var totalSelection = document.getElementById('tongsoluachon');
var totalPoint = document.getElementById('tongdiem');
var diemdanhap = document.getElementById('diemdanhap');
var listArrTracking = 0;
var thongbao = document.getElementById('thongbaosodu');
var nutbophieu = document.getElementById('bophieu');
var timmers = 0; //get value ô nhập điêm

function getValue() {
  var valueinput = diemdanhap.value;
  totalPoint.innerHTML = Number(valueinput) * listArr.length;
  var sodu = document.getElementById('sodukhadung').innerHTML;

  if (Number(sodu) < Number(valueinput) * listArr.length) {
    thongbao.innerHTML = 'Số dư không đủ';
    nutbophieu.style.visibility = 'hidden';
  } else {
    thongbao.innerHTML = '';
    nutbophieu.style.visibility = 'visible';
  }
}

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
        listVote.innerHTML = listArr.join(',');
        totalSelection.innerHTML = listArr.length;
        listArrTracking = listArr.length;
        getValue();
      } else {
        listArr = listArr.filter(function (item) {
          return item != _this.value;
        });
        listVote.innerHTML = listArr.join(',');
        totalSelection.innerHTML = listArr.length;

        if (listArr.length < listArrTracking) {
          getValue();
        }
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

var timeInSecs;
var ticker;
setTimeout(timmers = Number(document.getElementById('countdown').innerHTML), 100); // let timmer = 189;

function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000);
}

function tick() {
  var secs = timeInSecs;

  if (secs > 0) {
    timeInSecs--;
  } else {
    clearInterval(ticker);
    location.reload();
    startTimer(timmers);
  }

  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  document.getElementById("countdown").innerHTML = pretty;
}

startTimer(timmers);