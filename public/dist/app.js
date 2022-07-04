const resposiveButton = document.querySelector('.button__responsive');


resposiveButton.addEventListener('click', () =>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav__active');

     if(!nav.classList.contains('nav__active')){
        nav.classList.add("fadeOutAnimation")
    }
})