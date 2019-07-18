function mostrar()
{
//tomo la edad  
var Hora = document.getElementById("hora").value;

//alert (laHora);
//Al ingresar una hora, informar: 
//si está entre las 7 y las 11 : "Es de mañana.".
    Hora=parseInt(Hora);

    switch (Hora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("La hora es : "+ Hora + "am " + " Es de Mañana");        
            
            break;
    
        default: alert("Vuelva a ingresar");
            break;
    }



}//FIN DE LA FUNCIÓN