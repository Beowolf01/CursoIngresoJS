function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = Math.floor(Math.random() * 10 ) + 1;

	if(numero>=9)
	{
		alert(numero + " Excelente");
	}
	else
	{
		if(numero>=4)
		{
			alert(numero + " Aprobó");
		}
		else
		{
			alert(numero + " Vamos, la proxima se puede");
		}
	}
	
}//FIN DE LA FUNCIÓN