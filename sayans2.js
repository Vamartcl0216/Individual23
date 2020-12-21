

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