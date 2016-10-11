(function(){
	$(function(){
		/*console.log('Document Ready');
		var h1 = $('h1');
		//debugger
		h1.html('Hola a todos');
		debugger
		var p = $ ('<p>');
		p.html('este es un parrafo nuevo');
		
		$('.container').append(p);
		p.addClass('text.danger');

		$('button').click(function (e) {
			//console.log('Me Gusta', e);
			//cambiar color
			//$('button').addClass('btn-primary');
			//$('button').removeClass('btn-default');
			//$('button').toggleClass('btn-primary');
			$(this).toggleClass('btn-primary');

			

		});*/

		var id = 0;

		$('form').submit(function(e){
			/*console.log('Procesando Formulario');*/
			e.preventDefault();
			

			var moneda = $(this).serializeArray();
			/*console.log(moneda[0].value);
			console.log(moneda[1].value);
			console.log(moneda[2].value);*/
			var letra = moneda[0].value;
			if (/^[a-zA-Z]+$/.test(letra) == false){
				alert('el campo de dominacion solo acepta letra');
				$('#denominacion').val("").focus();
				return false;

			};
			function limpiarCampos() {
				$('#compra').val("").focus();
				$('#venta').val("");

			};
			

			if (Number(moneda[1].value)  > 0 && Number(moneda[2].value) > 0) {
				var compra = moneda[1].value;
				var venta = moneda[2].value;


			}else{

				alert('los numero deben ser positivo');
				limpiarCampos();
				return false;
			}
			if(compra >= venta){
				alert('venta tiene que ser mayor a compra');
				limpiarCampos();
				return false;
			};


			var row = '<tr>';
			row += '<td>'+id;
			row += '<td>'+moneda[0].value;
			row += '<td>'+moneda[1].value;
			row += '<td>'+moneda[2].value;

			$('table tbody').append(row);
			$('form').trigger("reset");

		});
		id++;
		
	});
		

})();