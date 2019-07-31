var home = function(){
	$("#content_home").show();
	$("#content_about").hide();
	$("#button_home").css("background", "white");
	$("#button_about").css("background", "");

};

$(document).ready(home);

$("#button_home").click(home);

var about = function(){
	$("#content_home").hide();
	$("#content_about").show();
	$("#button_home").css("background", "");
	$("#button_about").css("background", "white");

};

$("#button_about").click(about);












