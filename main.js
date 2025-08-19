const navbar = document.querySelector('#navbar');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',()=>{
    navbar.classList.toggle('navOpen');
    
})