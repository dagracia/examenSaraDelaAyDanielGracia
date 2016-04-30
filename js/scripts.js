/**********************************
OBJETO PERSONA
registra la informacion de los estudiantes
****************************************/


var locales = [
{ciudad:"Los Ceibos",numeroSalas:6, direccion:"Riocentro Los Ceibos, Av. del Bombero S/N Km 6,5 Vía a la Costa"},//
{ciudad:"San Marino",numeroSalas:7, direccion:"Cdla. Kennedy Norte, Av. Francisco de Orellana S/N y Carlos Luis Plaza Dañín, Edif. C.C. San Marino"},
{ciudad:"La Península",numeroSalas:5, direccion:"Mz. 166-A S/N Vía Libertad, Edif. Paseo Shopping Libertad - Salinas"}
];


/****************************************************
Impresion por pantalla de lista u objeto seleccionado
*****************************************************/

function printList(list){ //recibe el objeto y la posicion
	var listHTML = '';
	
		for(var i=0; i<list.length; i++){
			listHTML += creaList(list, i);
	}
	printHTML(listHTML, "info-locales");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, posicion){//crea la lista de datos de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li><h2>Ciudad: ' + list[posicion].ciudad + '</h2></li>'; //nos entrega el dato del atributo segun la posicion que tenga en el objeto
		listHTML += '<li>Numero de Salas: ' + list[posicion].numeroSalas + '</li>';
		listHTML += '<li>Dirección: ' + list[posicion].direccion + '</li>';
		

	listHTML += '</ul> <br>' ;// al final del HTML se agraga un espacio en blaco que diferencia a cada estudiante
	return listHTML; //retorna la lista listo para presentada
}



/******************************************
Funcion que imprime en el tag que queramos
********************************************/
function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);// aqui en el parametro TAG indica el id del tag en el que se va a presentar
	outputDiv.innerHTML = mensaje;
}

printList(locales);