  /*
  Fecha de modificación: 21/12/2020
Autores: Gonzalo Godoy 
Vanessa Amaro
Versión: 1.0
Objetivo de la página: Dar funcionalidad a la página
  
  
  */

  $( document ).ready(function() {
    $( function() {
        $( "#resizable" ).resizable();
        
    
      } );
    
      $( "#dialog" ).hide();
    
    
      $( function() {
        $( "#accordion" ).accordion();
      } );
    
    
      $( "#boton" ).click(function() {
        $( function() {
            $( "#dialog" ).dialog();
          } );
      });
    

      


  });