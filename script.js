const container=document.querySelector('.container');
const navbar=document.querySelector('ul');
container .addEventListener('click', ()=>{
    navbar.classList.toggle('slide');
})