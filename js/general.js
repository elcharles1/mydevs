




$(function(){ //Desplazamiento suave

     $('a[href*=\\#]').click(function(evt) { //detecta cualquier pulsación de un link y puede ser un problema
      evt.preventDefault();
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && check==1) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top-60; //Se posiciona el scroll en el top + 60 px de margen top que contiene la barra de navegación 

                 $('html,body').animate({scrollTop: targetOffset}, 600); //velocidad de animación y distancia de desplazamiento

               check=0; 
            }

       }

   });

});

// Esto hará que el desplazamiento suave solo funcione con los botones/enlaces correctos
var check=0; //si es 0 el desplazamiento no se activa
$("#pL").click(function(evt){
	check=1;
});

$("#pA").click(function(evt){
	check=1;
});

$("#pB").click(function(evt){
	check=1;
});

$("#pAn").click(function(evt){
	check=1;
});

$("#pO").click(function(evt){
	check=1;
});
//----
//

$(function(){
	$("#test").load('laravel/laravel.html');
});