/*  El sig. bloque de codigo maneja las cargas de vistas 
    para cada elemento del menu
 */
var menuLinks = document.querySelectorAll('#menu a');
// Se agrega la funcion que maneja el evento del click a cada elemento
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e){
        e.preventDefault();
        menuLinkClick(this);
    });
}

function menuLinkClick(link){
    app.loadView(link.dataset.view);
    // Quitar la clase "current" al enlace actual
    document.querySelector('a.current').className = "";
    // Agregarle clase "current" al link actual
    link.className = "current";
}