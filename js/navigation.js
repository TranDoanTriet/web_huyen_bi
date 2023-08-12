const list = document.querySelectorAll('.li-list')
function activeLink() {
    list.forEach(item =>{
        item.classList.remove('li-active')
        this.classList.add('li-active')
    })
}
list.forEach(item => {
    item.addEventListener('click',activeLink)
})