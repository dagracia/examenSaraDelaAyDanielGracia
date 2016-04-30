/*var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");
	//Optener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada obcion
	$option.text($anchor.text());
	//agregamos la opcion para el select
	$select.append($option);
})
*/

/*var jsonData = $.locales;//$.parseJSON(window.localStorage.getItem("data"));

var $select = $('#selectPelicula');
$(jsonData).each(function (index, o) {    
    var $option = $("<option/>").attr("value", o.CODE).text(o.NAMEVAR);
    $select.append($option);
});*/

var el = document.getElementById('selectPelicula'); //Get the select element
var opt = document.createElement('option'); //Create option element
for(var i=0; i<cartelera.length; i++){
opt.innerHTML = cartelera[i].nombrePelicula;//"it works!"; //Add a value to the option
el.appendChild(opt); 
}


var el = document.getElementById('selectLocal'); //Get the select element
var opt = document.createElement('option'); //Create option element
for(var i=0; i<locales.length; i++){
opt.innerHTML = locales[i].ciudad;//"it works!"; //Add a value to the option
el.appendChild(opt); 
}






function entradasIngresada(){
	return ($("#entradas").val().length>0);
}

function tarjetahabienteIngresado(){
	return ($("#tarjetahabiente").val().length>0);
}

function tarjetaIngresada(){
	return ($("#tarjeta").val().length>0);
}


function validacionCompleta(){
	return entradasIngresada() && tarjetahabienteIngresado() && tarjetaIngresada();
}

function puedeEnviar(){
	$("#submit").prop("disabled", !validacionCompleta());
}


puedeEnviar();


$(".number").keydown(function (e) {
           // Permite: backspace, delete, tab, escape, enter and .
           if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
               // Permite: Ctrl+A
               (e.keyCode == 65 && e.ctrlKey === true) ||
               // Permite: home, end, left, right
               (e.keyCode >= 35 && e.keyCode <= 39)) {
               // solo permitir lo que no este dentro de estas condiciones es un return false
               return;
           }
           // Aseguramos que son numeros
           if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
               e.preventDefault();
           }
       });


