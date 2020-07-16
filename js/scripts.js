  
$(document).ready( function(){
    $("#agregarCosa").on('click', function(event){
        event.preventDefault();
        
        var item = $("#inputUsuario").val();
        $("#listaSuper").append("<li class='lis'><p class='itemShop'>" + item + 
            "</p><input type='button' class='checar chec' value='checar'/>  <input class='del' type='button' value='eliminar'/></li>");
    });

    $("#listaSuper").on( 'click', 'li', function( event ){
        event.preventDefault( );

        if (event.target.value == 'checar') {
            $(this).toggleClass('chec');
        } 
        else if ( event.target.value == 'eliminar') {
            $(this).remove();
        }
    });
});