function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero

	numero = Math.floor(Math.random() * 10 ) + 1;

	if(numero<4)
	{
		alert(numero + " Vamos, la proxima se puede");
	}

	if(numero>=9)
	{
		alert(numero + " Excelente");
	}

	else
	{
		alert(numero + " Aprobó");
	}
}//FIN DE LA FUNCIÓN