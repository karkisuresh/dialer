var display_value = "";

var dialer = function(){
	tabIndex = 0;
	$("#content_dialer").show();
	$("#content_list").hide();
	$("#content_form").hide();
	$("#content_gestures").hide();
	$("#button_dialer").css("background", "white");
	$("#button_list").css("background", "");
	$("#button_form").css("background", "");
	$("#button_gestures").css("background", "");

};

$(document).ready(dialer);

$("#button_dialer").click(dialer);

var contact_list = function(){
	tabIndex = 1;
	$("#content_dialer").hide();
	$("#content_list").show();
	$("#content_form").hide();
	$("#content_gestures").hide();
	$("#button_list").css("background", "white");
	$("#button_dialer").css("background", "");
	$("#button_form").css("background", "");
	$("#button_gestures").css("background", "");
};

$("#button_list").click(contact_list);

var gestures = function(){
	tabIndex = 3;
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_form").hide();
	$("#content_gestures").show();
	$("#gesture_output").val("ready");
	$("#button_list").css("background", "");
	$("#button_dialer").css("background", "");
	$("#button_form").css("background", "");
	$("#button_gestures").css("background", "white");
};

$("#button_gestures").click(gestures);

var form = function(){
	tabIndex = 2;
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_form").show();
	$("#content_gestures").hide();
	$("#button_form").css("background", "white");
	$("#button_dialer").css("background", "");
	$("#button_list").css("background", "");
	$("#button_gestures").css("background", "");
};

$("#button_form").click(form);

var tabIndex = 0;

var tabs = [dialer, contact_list, form, gestures];

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

var downX = 0;
var downY = 0;

var mousedown = function(event){
	downX = event.clientX;
	downY = event.clientY;
	if (tabIndex == 3) { $("#gesture_output").val("mouse down"); }
};

var mouseup = function(event){
	upX = event.clientX;
	upY = event.clientY;
	if(upX < downX){
		$("#gesture_output").val("swipe left");		
	}
	else if (upX > downX){
		$("#gesture_output").val("swipe right");
	}
	else{
		$("#gesture_output").val("mouse up");
	}
	
	// if(upY < downY){
		// $("#gesture_output").val("swipe up");
	// }
	// else if (upY > downY){
		// $("#gesture_output").val("swipe down");
	// }
	// else{
		// $("#gesture_output").val("mouse up");
	// }
};

var switchtabs = function(event){
	upX = event.clientX;
	upY = event.clientY;
	if(upX < downX){
		if (tabIndex != 0)
		{
			tabIndex = tabIndex - 1;
			func = tabs[tabIndex];
			func();
		}			
	}
	else if (upX > downX){
		if (tabIndex != tabs.length-1)
		{
			tabIndex = tabIndex + 1;
			func = tabs[tabIndex];
			func();
		}	
	}
}

$("#gesture_area").mousedown(mousedown);
$("#gesture_area").mouseup(mouseup);

$("#swipe_area").mousedown(mousedown);
$("#swipe_area").mouseup(switchtabs);

$(document).keydown(function(event){
	switch(event.which){
		case 37:
			if (tabIndex != 0)
			{
				tabIndex = tabIndex - 1;
				func = tabs[tabIndex];
				func();
			}
			break;
		case 39:
			if (tabIndex != tabs.length-1)
			{
				tabIndex = tabIndex + 1;
				func = tabs[tabIndex];
				func();
			}
			break;
		default: return;	
	}
});













