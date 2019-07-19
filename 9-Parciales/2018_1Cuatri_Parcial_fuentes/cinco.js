function mostrar()
{
    var planeta;
    var mensaje = "Este no es un planeta valido";
    
    planeta = prompt("Planeta");

    switch(planeta){
        case"mercurio":
        case"venus":
            mensaje = "Aca hace mas calor";
                break;

        case"tierra":
            mensaje = "Aca vivimos";
                break;

        case"marte":
        case"jupiter":
        case"saturno":
        case"urano":
        case"neptuno":
            mensaje = "Aca hace mas frio";
                break;
        
    }
    alert(mensaje);

}
