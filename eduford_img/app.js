let menu=document.querySelector('nav ul')
let hamburger=document.querySelector('nav .mobileS')
hamburger.addEventListener("click",function(){
    menu.classList.toggle('show');
});