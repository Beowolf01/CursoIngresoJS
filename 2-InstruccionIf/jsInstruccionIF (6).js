function mostrar()
{
//tomo la edad  
    var edad

    edad = document.getElementById("edad").value;

    if(edad>=18)
    {
        alert("Usted es mayor de edad");
    }
    if(edad<13)
    {
        alert("Usted es un niño");
    }
    else//Para no utilizar otro if o usar mas de 1, utilicé un else para la preposicion mas larga
    {
        alert("Usted es un adolescente");
    }

}//FIN DE LA FUNCIÓN