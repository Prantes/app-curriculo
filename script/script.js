const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type==='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active =nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded','true');
    if(active) {
        event.currentTarget.setAttribute('aria-label','Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


//eventos página de login
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});