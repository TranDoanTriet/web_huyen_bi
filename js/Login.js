var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
var show2 = document.querySelector('.show2');
show.addEventListener('click', active);
show2.addEventListener('click', active2);
function active(){
    if(input.type === "password"){
        input.type = "text";
        show.style.color = "#1DA1F2";
        show.textContent = "Ẩn";
    }else{
        input.type = "password";
        show.textContent = "Hiện";
        show.style.color = "#111";
    }
}
function active2(){
    if(input.type === "password"){
        input.type = "text";
        show2.style.color = "#1DA1F2";
        show2.textContent = "ẨN";
    }else{
        input.type = "password";
        sho2w.textContent = "Hiện";
        show2.style.color = "#111";
    }
}
