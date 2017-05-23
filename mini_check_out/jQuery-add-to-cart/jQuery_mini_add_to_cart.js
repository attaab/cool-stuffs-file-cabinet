$(document).ready(function(){
	    $('#wine_amount').click(function(){
	    	$('.wine').fadeToggle();
	    });
	   $('#biscuit_head').click(function(){
	    	$('.biscuit_type').fadeToggle();
	    });
	  $('#biscuit_head').click(function(){
	    	$('.button').fadeIn();
	    });
	  $('#wine_amount').click(function(){
	    	$('.button').fadeIn();
	    });
	  $('#check_btn').click(function(){
	  	    $('.notification').fadeIn();
	  })
		$('input[type="checkbox"]').change(function(){
			var list = '';
			var checkout = "";
			var checkoutTotal = 0;
			var total = 0;
		// console.log($(this));
		// console.log($(this).parent());
		// $(this).parent().text();

		// $('#items_selected').html("<li>"+ $(this).parent().text() + "</li>");
		$("[type = 'checkbox']:checked").each(function(e){
			list += "<li>" + $(this).parent().text() + "</li>"
			checkout += "<li>" + $(this).parent().text() + "</li>"
        	total += Number($(this).val());
        	checkoutTotal += Number($(this).val());
			
		});
	    $('#checkout').html(list);
		$('#list').html(checkout);
        $('#total_amount').html(total);
         $('#checkout_total').html(checkoutTotal);
	});
});


function load(){
	document.getElementById('done').style.display = "block"
	document.getElementById('done_text').style.display = "block"
	document.getElementById('loading').style.display = "none"
	document.getElementById('loading_text').style.display = "none"
}
 function myFunction(){
 	setTimeout(load, 4000);
 }
