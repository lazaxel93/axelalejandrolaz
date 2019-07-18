function mostrar()
{

	var numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));


	     while (numero <= 0 || numero >=9 ||  isNaN(numero))
	
	
	{

	   

	   
	   alert("numero ingresado incorrecto");


	   numero = parseInt (prompt("Reingrese numero entre 0 y 9" ));



		


	}

	document.getElementById("Numero").value = numero;
alert ("numero correcto");





}//FIN DE LA FUNCIÓN