let btnNavOpen = document.getElementById('nav-toggler-open');
let btnNavClose = document.getElementById('nav-toggler-close');
let body = document.querySelector('body');

btnNavOpen.addEventListener('click', function(e) 
{
    body.classList.toggle('open');    
});

btnNavClose.addEventListener('click', function(e) 
{
    body.classList.toggle('open');    
});

