/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ var sueldo;
    var resultado;
    var descuento;

    sueldo= parseFloat(documento.getElementById(importe))
   
   descuento = (sueldo * 25/100
   
    resultado= parseInt(document.getElementById("resultado").value) + descuento );

    

	
}
