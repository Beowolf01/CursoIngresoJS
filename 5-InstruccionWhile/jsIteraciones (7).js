function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio;
	var seguir;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numero)){
			
			alert("Eso no es un numero");
			numero = parseInt(prompt("Ingrese un numero"));

		}
		acumulador = acumulador + numero;
		respuesta = prompt("Quiere continuar?");
		contador++;

		
	}while(respuesta!="n");

	promedio = acumulador / contador;


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN