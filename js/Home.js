$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var style = document.createElement('style')
let position = 'right'
style.innerHTML = `
    @keyframes my-animation{
        0%{${position}: -${document.querySelector('.text').offsetWidth + 10}px;}
        100%{${position}:100%;}
    }
`
document.head.append(style)