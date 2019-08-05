function mostrar()
{
    var nota;
    var alumno;
    var contadorVarones;
    var promedio;
    var sumaNota;
    var notaMasBaja;
    var sexo;
    var sexoMasBajo;

    contadorVarones = 0;
    promedio = 0;
    sumaNota = 0;
    notaMasBaja = 0;
    alumno = 0;
    sexo = 'f';
    sexo = 'm';
    nota = 0;

    while(alumno<5){
        nota = parseInt(prompt("Ingrese nota"));
        while(isNaN(nota)){
            alert("Error, eso no es una nota");
            nota = parseInt(prompt("Ingrese nota"));
        }
        while(!(nota>0 && nota<10)){
            alert("Error, la nota es incorrecta");
            nota = parseInt(prompt("Ingrese nota de nuevo"));
        }

        sexo = prompt("Ingrese sexo: f/m");
        while(!(sexo == 'f' || sexo == 'm')){
            alert("Error, sexo incorrecto");
            sexo = prompt("Reingrese el sexo");
        }

        if(alumno == 0){
            nota = notaMasBaja;
            sexo = sexoMasBajo;
        }
        else{
            if(nota<notaMasBaja){
                notaMasBaja = nota;
                sexoMasBajo = sexo;
            }
            if(sexo == 'm' && nota>=6){
                contadorVarones++;
            }
            
        }
        alumno++;
        sumaNota = sumaNota + nota;
        promedio = sumaNota / alumno;

    }
    alert("La suma de las notas es: " + sumaNota + " y el promedio es: " + promedio);
    alert("La nota mas baja es: " + notaMasBaja + " y el sexo es :" + sexoMasBajo);
    alert("La cantidad de varones con mayor o igual a 6 es: " + contadorVarones);


}

