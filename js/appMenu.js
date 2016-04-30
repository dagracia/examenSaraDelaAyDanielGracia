/*$(#galeria li a).click(){
	var href= $(this).attr("href");
	console.log(href);
}
*/
//
var $overlay = $("<div id= 'overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//para añadir la imagen
$overlay.append($image);
//para añadir el texto alterno
$overlay.append($caption);

//agregando un nuevo objeto en el DOM
$("body").append($overlay);

//1 el usuario da click en una imagen, se captura el objeto
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href= $(this).attr("href");

//1.1 mostramos el light box con la imagen a la que se deo click
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();

	console.log(href);	
});

//cerrar overlay
$overlay.click(function(){
	$overlay.hide();
})


////////////////////////////
//menu para moviles
///////////////////////////

var $select = $("<select></select>");
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

//var $button = $("<button>Go</button>");
//$("#menu").append($button);

$select.change(function(){
	//
	window.location = $select.val();
})


//obtener si el ñlink es la pagina actual (tiene clase selected)
if ($(this).hasClass("selected")){
	$option.prop("selected", true);
}