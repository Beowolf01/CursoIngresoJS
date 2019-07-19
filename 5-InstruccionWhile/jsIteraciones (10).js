function mostrar()
{

		var contador=0;
		var numero;
		alert(numero);
		var numeroDos;
		var suma;
		alert(numero);

		numeroDos=12;
		suma=numero*numeroDos;
		alert(suma);
		suma=3;//bien
		suma="3";//bien
		suma="lalala";//error

		while((isNaN(suma))||(suma<0)|| (suma>10))
		{
			alert("error");
			suma=prompt("Error, reingrese solo numeros");
		}
		alert("ingreso correcto " + suma);
		
		//if(isNaN(suma))
		//{
		//	alert("error");

		//}else{
		//	alert("bien");
		//}

		//declarar contadores y variables 
	
		//var respuesta="si";

		//while(respuesta!="no")
		//{
		
	
		//}




}//FIN DE LA FUNCIÓN