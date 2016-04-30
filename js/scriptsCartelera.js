/**********************************
OBJETO PERSONA
registra la informacion de los estudiantes
****************************************/


var cartelera =[
{nombrePelicula:"Capitan America Civil War",actor:"Chris Evans", director:"Joe Johnston", genero:"Acción", 
sinopsis:"Capitán América: Civil War' sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo. El nuevo ‘status quo’ provoca la ruptura de los Vengadores y da como resultado dos bandos -uno liderado por Steve Rogers y su deseo de que los superhéroes sigan siendo libres para defender a la humanidad sin la intromisión del Gobierno y otro liderado por Tony Stark que decide apoyar la decisión de la clase dirigente", 
imagen:"img/civilwar.jpg"},//
{nombrePelicula:"El Cazador y La Reina del Hielo",actor:"Charlize Theron", director:" Cedric Nicolas-Troyan", genero:"aventura-drama", 
sinopsis:"Con la habilidad de congelar a cualquier enemigo, Freya, la joven y poderosa Reina de Hielo, se ha dedicado a entrenar una legión de hábiles y fuertes guerreros cazadores. Pero Eric y Sara desafiarán la única condición impuesta por la reina: mantener su corazón helado frente al amor. Al sentirse traicionada por ambos guerreros, Freya busca impedir su relación amorosa. Será entonces cuando la malvada Reina del Hielo ordenará traer de vuelta el Espejo Mágico para resucitar a su hermana del abismo, la temible Reina Ravenna", 
imagen:"img/cazador.jpg"},//
{nombrePelicula:"Atrapa La Bandera ",actor:"Michelle Jenner", director:"Enrique Gato", genero:"Animación", 
sinopsis:"Cuenta la historia de Richard, un ambicioso multimillonario, quién quiere apropiarse de la luna y explotar la fuente de energía. Para ello, deberá borrar de la historia la gesta de los astronautas del Apolo XI y sus famosos primeros pasos por la Luna. El único capaz de impedirlo es el simpático y decidido surfista de 12 años, Mike Goldwing, quien con la ayuda de sus amigos, su abuelo y una peculiar iguana, lucharán por conseguir la bandera más importante de la historia y salvar el futuro de la Tierra", 
imagen:"img/atrapabandera.jpg"},//
{nombrePelicula:"La Maldicion El Final",actor:"Airi Taira", director:"Masayuki Ochiai", genero:"Terror", 
sinopsis:"Esta película gira en torno a Mai, hermana de la profesora Yui, quien murió bajo misteriosas circunstancias. Mai está dispuesta a averiguar lo que pasó con su hermana, exactamente después de que ella visitase a un estudiante, Toshio Saeki. Mai poco a poco va descubriendo y siguiendo pistas, que la llevan hasta una casa maldita, que ahora es solo un terreno vacío", 
imagen:"img/lamaldicion.jpg"},//
{nombrePelicula:"Batman vs Superman",actor:"Benn Affleck", director:"Zack Snyder", genero:"Acción Superheroes", 
sinopsis:"Ante el temor de las acciones de un desenfrenado Superhéroe, el formidable y contundente vigilante de Gotham se enfrenta al más admirado héroe de la era moderna de Metropolis, mientras que el mundo se debate reflexionando sobre qué tipo de héroe necesita realmente. Con Batman y Superman en guerra, pronto aparece una nueva amenaza que pone a la humanidad en uno de los mayores peligros jamás conocidos", 
imagen:"img/batmanysuper.jpg"},//
];


/****************************************************
Impresion por pantalla de lista u objeto seleccionado
*****************************************************/

function printList(list){ //recibe el objeto y la posicion
	var listHTML = '';
	
		for(var i=0; i<list.length; i++){
			listHTML += creaList(list, i);
	}
	printHTML(listHTML, "info-cartelera");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, posicion){//crea la lista de datos de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li><h2>nombrePelicula: ' + list[posicion].nombrePelicula + '</h2></li>'; //nos entrega el dato del atributo segun la posicion que tenga en el objeto
		listHTML += '<li>actor: ' + list[posicion].actor + '</li>';
		listHTML += '<li>director: ' + list[posicion].director + '</li>';
		listHTML += '<li>genero: ' + list[posicion].genero + '</li>';
		listHTML += '<li>sinopsis: ' + list[posicion].sinopsis + '</li>';
		listHTML += '<li><a href=' +list[posicion].imagen + ' alt = ' + list[posicion].nombrePelicula + '><img src=' +list[posicion].imagen + '/></a></li>';

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

printList(cartelera);