$("#submit").click(function(){
	$("#alert-modal").show();
	$("#alert-modal").focus();
});

$("#alert-modal").keydown(function(event){
	if(event.key === "Escape"){
		$("#alert-modal").css("display", "none");
	}
});

var modal = document.getElementById("alert-modal"); 

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}