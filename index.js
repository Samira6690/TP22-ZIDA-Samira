const nav = document.querySelector('nav');
const Fabars= document.querySelector('fa-bars');
document.querySelector('.nav-links').onclick = () => {
    nav.classList.toggle('active');
}
Fabars.onclick = () =>{
    nav.classList.toggle('active');
}