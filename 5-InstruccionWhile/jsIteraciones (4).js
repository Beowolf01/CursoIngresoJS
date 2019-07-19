function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	//while(!(numero<0 || numero>10)) tambien es valido.
	while(numero< 0 || numero >10)//Pensar la forma incorrecta.
	{
		numero = prompt("Error, ingrese un número entre 0 y 10.");
	}
	alert("Correcto");


}//FIN DE LA FUNCIÓN