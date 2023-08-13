let popUp = document.getElementById('popup-vote-info')
let listArr = []
let checkboxs = document.querySelectorAll('.Checkbox')
let list = document.getElementById('inraketqua')
let totalSelection = document.getElementById('tongsoluachon')
let totalPoint = document.getElementById('tongdiem')
// let diemdanhap = document.getElementById('diemdanhap').value
// console.log(diemdanhap)
for(let checkbox of checkboxs){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArr.push(this.value)
            list.innerHTML = listArr.join(',')
            totalSelection.innerHTML = listArr.length
        }else{
            listArr = listArr.filter(item => item != this.value)
            list.innerHTML = listArr.join(',')
            totalSelection.innerHTML = listArr.length
        }   
    })
}

function getValue(){
    let diemdanhap = document.getElementById('diemdanhap')
    let valueinput = diemdanhap.value
    totalPoint.innerHTML = Number(valueinput) * listArr.length
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


