


$(function(){ //Desplazamiento suave

     $('a[href*=\\#]').click(function(evt) {
      evt.preventDefault();
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top-60; //Se posiciona el scroll en el top + 60 px de margen top que contiene la barra de navegación 

                 $('html,body').animate({scrollTop: targetOffset}, 600); //velocidad de animación y distancia de desplazamiento

                
            }

       }

   });

});