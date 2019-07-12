/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno
    var numeroDos
    var sumar

    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;

    alert("La suma es: " + suma);

}

function restar()
{
    var numeroUno
    var numeroDos
    var resta

    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);

    resta = numeroUno - numeroDos;

    alert("La resta es: " + resta);

}

function multiplicar()
{ 
    var numeroUno
    var numeroDos
    var multiplicación

    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);

    multiplicación = numeroUno * numeroDos;

    alert("La multiplicación es: " + multiplicación);

}

function dividir()
{
    var numeroUno
    var numeroDos
    var división

    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);

    división = numeroUno / numeroDos;

    alert("La división es: " + división);
}

