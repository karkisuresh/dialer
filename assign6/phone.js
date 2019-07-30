var display_value = "";

var dialer = function(){
	$("#content_dialer").show();
	$("#content_list").hide();
	$("#content_form").hide();
	$("#content_about").hide();
	$("#button_list").css("background", "");
	$("#button_form").css("background", "");
}

$(document).ready(dialer);

$("#button_dialer").click(dialer);

$("#button_list").click(function(){
	$("#content_dialer").hide();
	$("#content_list").show();
	$("#content_form").hide();
	$("#content_about").hide();
	$("#button_dialer").css("background", "");
	$("#button_form").css("background", "");
});

$("#button_about").click(function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_form").hide();
	$("#content_about").show();
	$("#button_dialer").css("background", "");
	$("#button_form").css("background", "");
});

var form = function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_form").show();
	$("#content_about").hide();
	$("#button_dialer").css("background", "");
	$("#button_list").css("background", "");
}

$("#button_form").click(form);

$("#btn_1").click(function(){
	display_value = display_value.concat("1");
	$("#value").val(display_value);
});

$("#btn_2").click(function(){
	display_value = display_value.concat("2");
	$("#value").val(display_value);
});

$("#btn_3").click(function(){
	display_value = display_value.concat("3")
	$("#value").val(display_value);
});

$("#btn_4").click(function(){
	display_value = display_value.concat("4")
	$("#value").val(display_value);
});

$("#btn_5").click(function(){
	display_value = display_value.concat("5")
	$("#value").val(display_value);
});

$("#btn_6").click(function(){
	display_value = display_value.concat("6")
	$("#value").val(display_value);
});

$("#btn_7").click(function(){
	display_value = display_value.concat("7")
	$("#value").val(display_value);
});

$("#btn_8").click(function(){
	display_value = display_value.concat("8")
	$("#value").val(display_value);
});

$("#btn_9").click(function(){
	display_value = display_value.concat("9")
	$("#value").val(display_value);
});

$("#btn_0").click(function(){
	display_value = display_value.concat("0")
	$("#value").val(display_value);
});

$("#btn_ast").click(function(){
	display_value = display_value.concat("*")
	$("#value").val(display_value);
});

$("#btn_hash").click(function(){
	display_value = display_value.concat("*")
	$("#value").val(display_value);
});

$("#btn_clr").click(function(){
	$("#value").val("");
	display_value = "";
});

$("#btn_dial").click(function(){
	alert("Sorry the functionality is not supported at this time.")
});

$("#btn_clear").click(function(){
	$("#name").val("");
	$("#phone").val("");
	$("#email").val("");
});

$("#btn_add").click(function(){
	alert("Sorry the functionality is not supported at this time.")
});

var curMode = 0;

$("#switch-mode").click(function(){
	if (curMode === 0){
		$("link[href='phone.css']").attr({href : "phone-large.css"});
		$("#switch-mode").text("Normal Mode");
		curMode = 1;
	}
	else{
		$("link[href='phone-large.css']").attr({href : "phone.css"});
		$("#switch-mode").text("High Contrast Mode");
		curMode = 0;
	}
});

$("#increase-font").click(function(){
	let cursize = parseFloat($("body").css('font-size'));
	$("body").css('font-size', (cursize * 1.1) + 'px');
});

$("#decrease-font").click(function(){
	let cursize = parseFloat($("body").css('font-size'));
	$("body").css('font-size', (cursize * 0.9) + 'px');
});












