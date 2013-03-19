/*
Nombre: Estudio Jamaica
Theme URI: http://www.estudiojamaica.com/
Description: Oro Negro  
Author: Eduardo Esparza
Author URI: http://www.bulebule.mx
Version: 2.0
*/
$(document).ready(function() {
////


$("#bco").bind({
	click: function(){
	$("#bco").fadeOut("easing");
	},
});


$("#ay").bind({
	click: function(){
		$("#prec").fadeOut();
			$("#cierre").fadeOut();
	$("#ay,#en").fadeOut(100, function (){
		$("#logo, #resp, #do, #con").fadeIn(1000, function (){
			$("#resp, #do").stop().animate({"left":"0px"},1000);
			$("#logo").stop().animate({"margin-top":"30px"},1000);
			$("#nav").fadeIn();

		});
		
	});
	},
});

$("#en").stop().fadeIn(1000, function(){
	$("#ay").fadeIn(1000);
});

$("#beneficios").bind({
	click: function(){
		$("#contact").fadeOut();
			$("#sho").fadeOut();
				$("#a1").fadeOut();
		$("#a2").fadeOut();
	$("#resp_full").fadeOut();
	$("#graf").fadeOut();
	$("#prec").fadeOut();
	$("#cierre").fadeOut();
	$("#ay,#en").fadeOut();
	$("#con").fadeIn();
	$("#do").fadeIn();
	$("#resp").fadeIn();
	$("#logo").fadeIn();
	$("#nav").fadeIn();
	},
});


$("#precios").bind({
	click: function(){
		$("#contact").fadeOut();
			$("#sho").fadeOut();
		$("#a1").fadeOut();
		$("#a2").fadeOut();
		$("#resp_full").fadeOut();
		$("#graf").fadeOut();
		$("#cierre").fadeOut();
		$("#con").fadeOut();
		$("#do").fadeOut();
		$("#resp").fadeOut();
	    $("#logo").fadeOut();
		$("#prec").fadeIn();
	},
});
//
$("#ccampa").bind({
	click: function(){
		$("#contact").fadeOut();
	$("#sho").fadeOut();
	$("#a1").fadeOut();
	$("#a2").fadeOut();
	$("#resp_full").fadeOut();
	$("#graf").fadeOut();
	$("#prec").fadeOut();
	$("#ay").fadeOut();
	$("#en").fadeOut();
	$("#con").fadeOut();
	$("#do").fadeOut();
	$("#resp").fadeOut();
	$("#logo").fadeOut();
	$("#cierre").fadeIn();
	},
});

$("#do").bind({
	click: function(){
		$("#a1").fadeOut();
		$("#a2").fadeOut();
	$("#graf").fadeOut();
	$("#resp_full").fadeIn();
	$("#a1").css("height","10px");
	$("#a2").css("height","10px");

	},
});


$("#resp").bind({
	click: function(){
	$("#resp_full").fadeOut();
	$("#graf").fadeIn();
$("#a1").fadeIn().animate({"height":"66px"},1000);
$("#a2").fadeIn().animate({"height":"73px"},1000);
	},
});


$("#shot").bind({
	click: function(){
	$("#contact").fadeOut();
	$("#a1").fadeOut();
	$("#a2").fadeOut();
	$("#resp_full").fadeOut();
	$("#graf").fadeOut();
	$("#prec").fadeOut();
	$("#ay").fadeOut();
	$("#en").fadeOut();
	$("#con").fadeOut();
	$("#do").fadeOut();
	$("#resp").fadeOut();
	$("#logo").fadeOut();
	$("#cierre").fadeOut();
	$("#sho").fadeIn();

	},
});
$("#envio").bind({
	click: function(){
	$("#a1").fadeOut();
	$("#a2").fadeOut();
	$("#resp_full").fadeOut();
	$("#graf").fadeOut();
	$("#prec").fadeOut();
	$("#ay").fadeOut();
	$("#en").fadeOut();
	$("#con").fadeOut();
	$("#do").fadeOut();
	$("#resp").fadeOut();
	$("#logo").fadeOut();
	$("#cierre").fadeOut();
	$("#contact").fadeIn();

	},
});


////
});




// jQuery ends