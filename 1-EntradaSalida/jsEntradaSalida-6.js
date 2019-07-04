/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{var num1
    var num2;
    var suma;
num1 = parseInt (document.getElementById ("numeroUno").value); // parseint sirve para convertir letra en numero var value va en minuscula
num2 = parseInt (document.getElementById ("numeroDos").value); // parseint sirve para convertir letra en numero
suma = num1 + num2 ;
alert ("la suma es " + suma); // RESPETAR CARACTER ALFABETICO 



}

