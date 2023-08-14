let popUp = document.getElementById('popup-vote-info')
let listArr = []
let checkboxs = document.querySelectorAll('.Checkbox')
let listVote = document.getElementById('inraketqua')
let totalSelection = document.getElementById('tongsoluachon')
let totalPoint = document.getElementById('tongdiem')
let diemdanhap = document.getElementById('diemdanhap')
let listArrTracking = 0
let thongbao = document.getElementById('thongbaosodu')
let nutbophieu = document.getElementById('bophieu')

//get value ô nhập điêm
function getValue(){
    let valueinput = diemdanhap.value
    totalPoint.innerHTML = Number(valueinput) * listArr.length

    let sodu = document.getElementById('sodukhadung').innerHTML
    if(Number(sodu) < (Number(valueinput) * listArr.length)){
        thongbao.innerHTML = 'Số dư không đủ'
        nutbophieu.style.visibility = 'hidden'
    }else{
        thongbao.innerHTML = ''
        nutbophieu.style.visibility = 'visible'
    }
}

for(let checkbox of checkboxs){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArr.push(this.value)
            listVote.innerHTML = listArr.join(',')
            totalSelection.innerHTML = listArr.length
            listArrTracking = listArr.length
            getValue()
        }else{
            listArr = listArr.filter(item => item != this.value)
            listVote.innerHTML = listArr.join(',')
            totalSelection.innerHTML = listArr.length
            if(listArr.length < listArrTracking){
                getValue()
            }
        }
    })
}

function openPopup(){
    popUp.style.visibility = 'visible'
    popUp.style.top = '50%'
    popUp.style.transform = 'translate(-50%,0) scale(1)'
}
function closePopup(){
    popUp.style.visibility = 'hidden'
    popUp.style.top = '0'
    popUp.style.transform = 'translate(-50%,-50%) scale(0.1)'
}


var timeInSecs;
var ticker;
let timmer = 2;
function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000); 
}

function tick( ) {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--; 
    }
    else {
        clearInterval(ticker);
        location.reload();
        startTimer(timmer*60);
    }

    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(timmer*60);