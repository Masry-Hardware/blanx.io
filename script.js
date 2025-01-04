const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

const sr = ScrollReveal ({
    distance: '30px',
    duration: 1200,
    reset: true
})

sr.reveal('.home-text', {delay:120, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.box,.contact', {delay:120, origin:'bottom'})

function directcollection(){
    location.href="collection.html";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let submenu = document.getElementById("sub-menu-wrap")

function togglecart(){
    submenu.classList.toggle("open-class")
}