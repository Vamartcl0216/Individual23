
  /*
  Fecha de modificación: 21/12/2020
Autores: Gonzalo Godoy 
Vanessa Amaro
Versión: 1.0
Objetivo de la página: Dar funcionalidad a la página
  
  
  

function enviar() {

    if (document.getElementById('idventa').value == 0 || document.getElementById('vende').value == "" ||
        document.getElementById('vende').value == 0) {

        alert("Todos los Campos Deben Estar Llenos");
    }


    if (document.getElementById('idventa').value < 0 || document.getElementById('idventa').value > 1000 ||
        document.getElementById('vende').value.length > 50 || document.getElementById('art').value < 0 ||
        document.getElementById('art').value > 999) {


        document.getElementById('contene').innerHTML = "Datos ingresados no validos <br>" + document
            .getElementById('contene').innerHTML;

    }
    if (document.getElementById('idventa').value > 0 && document.getElementById('idventa').value < 1000 &&
        document.getElementById('vende').value.length < 50 && document.getElementById('art').value > 0 &&
        document.getElementById('art').value < 999) {

        document.getElementById('contene').innerHTML = "Datos ingresados correctamente <br>" + document
            .getElementById('contene').innerHTML;
    }

}

function borrar() {
    document.getElementById('idventa').value = null;
    document.getElementById('vende').value = null;
    document.getElementById('art').value = null;
    document.getElementById('contene').innerHTML = "";
}

function mandar() {

    if (document.getElementById('user').value.length == 0 || document.getElementById('pass').value.length ==
        0) {
        alert("El Campo Usuario o Contraseña No Puede Estar Vacío");
    } else if (document.getElementById('user').value == 'admin' && document.getElementById('pass').value ==
        '1234') {
        alert("Usuario y Contraseña Correctos, Será Redirigido");
        window.location.href = "agregarcliente.html";
    } else {
        alert("Usuario o Contraseña Inválidos");
    }

}



function boton() {

    c = confirm('¿Confirma la acción de Eliminar Venta?');

    if (c) {
        alert('Venta Eliminada Satisfactoriamente')
    }

}

//de aqui hacia abajo es tarea 13 y 14


$( function() {
    
    $( "#datepicker" ).datepicker();
    $( "#datepicker2" ).datepicker();
  } );

$(document).ready(function () {

    var array1 = [];
    var array2 = [];
    var array3= [];





    $("#boton2").click(function (procesar) {



        a = $("#idventa").val();
        b = $("#producto option:selected").val();
        c = $("#cantidad").val();






       d= $('#resulta1').val($('#resulta1').val() + "\n" + a);
        f=$('#resulta2').val($('#resulta2').val() + "\n" + b);
        g=$('#resulta3').val($('#resulta3').val() + "\n" + c);








        if (b == 'pan') {
            array1.push('pan')

        }


        if (array1.length == 2) {
            alert('El producto "pan" ya fue ingresado, se reinicia el sistema')
            d.empty()
            f.empty()
            g.empty()
            location.reload();
        }





        if (b == 'queso') {
            array2.push('queso')

        }

        if (array2.length == 2) {
             alert('El producto "queso" ya fue ingresado, se reinicia el sistema')
             d.empty()
             f.empty()
             g.empty()
             location.reload();
        }



        if (b == 'casata') {
            array3.push('casata')

        }


        if (array3.length == 2) {
             alert('El producto "casata" ya fue ingresado, se reinicia el sistema')
             d.empty()
             f.empty()
             g.empty()
             location.reload();
        }



if (c<1 || c >=1000) {
     alert('cantidad incorrecta, se reinicia el sistema')
     d.empty()
     f.empty()
     g.empty()
     location.reload();

}



    });











    
    
    jQuery.extend(jQuery.validator.messages, {

        required: "Este campo es obligatorio.",
        max: jQuery.validator.format(
            "por favor ingrese un numero menor a {0} ."),
        min: jQuery.validator.format(
            "por favor ingrese un numero mayor o igual a  {0}.")


    });

    


    $( "#myform" ).validate({
        rules: {
          fact: {
            required: true,
            max: 10000,
            min:0
          },
          vent: {
            required: true,
            max: 1000,
            min:0
          },
          fech: {
            required: true,
            date:true
          },

          fechp: {
            required: true,
            date:true
          },
          sub: {
            required: true,
            
          },
          imp: {
            required: true,
            
          },
             tot: {
            required: true,
            
          },





        }
      });






   





















  
    $(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});


    $("#hist").click(function (esconder) {

        $("#hist").hide();
    });

    $("#ubic").click(function (esconder) {

        $("#ubic").hide();
    });


    $("#serv").click(function (esconder) {

        $("#serv").hide();
    });

    $("#Link").click(function (esconder) {

        $("#Link").hide();
    });




    $("#boton").click(function (mostrar) {

        $("#Link").show();
        $("#serv").show();
        $("#hist").show();
        $("#ubic").show();



    });





});