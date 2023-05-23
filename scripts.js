let menu = document.getElementById('menu');
let abrir_menu = document.getElementById('abrir-menu');
let cerrar_menu = document.getElementById('cerrar-menu');

abrir_menu.addEventListener('click', activarmenu);
cerrar_menu.addEventListener('click', activarmenu);

function activarmenu() {
    menu.classList.toggle('show-menu');
    if(menu.classList.contains('show-menu')){
        abrir_menu.style.display = 'none';
        cerrar_menu.style.display = 'block';   
    }
    else{
        abrir_menu.style.display = 'block';
        cerrar_menu.style.display = 'none'; 

    }
}