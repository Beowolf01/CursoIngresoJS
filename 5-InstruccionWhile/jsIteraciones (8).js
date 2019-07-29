function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var contNegativo=0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numero)){
			
			alert("Eso no es un numero");
			numero = parseInt(prompt("Ingrese un numero"));

		}
		
		if(numero<0){
			negativo *= numero
			contNegativo++;
		}
		else{
			positivo += numero
		}

		respuesta = prompt("Quiere ingresar otro numero?");
		
	}while(respuesta!="n");


document.getElementById('suma').value=positivo;
if(contNegativo == 0){
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN