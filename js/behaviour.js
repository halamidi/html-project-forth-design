//note for sam onload function works this is only to remove text from search box
window.onload = function(){ 
	//Get submit button
	var submitbutton = document.getElementById("erase");
	var submitbutton2 = document.getElementById("erase2");
	//Add listener to submit button
	if(submitbutton.addEventListener){
		submitbutton.addEventListener("click", function() {
			if (submitbutton.value == 'find services in your area'){
				submitbutton.value = '';
			}
		});
	}

}

$(document).ready(function(){
    $('.searchbutton').click(function(){
        var toAdd = $('#erase').val();
		toAdd = toAdd.toUpperCase();
		var hiddenDivs = $("service1");
        if(toAdd == "PHARMACY" || toAdd == "HICKEYS"){
			$("#service1").css("display", "block");
			}
			else{
			$("#service1").css("display", "none");
			}
        });
    });
	$(document).ready(function(){
    $('.searchbutton').click(function(){
        var toAdd = $('#erase').val();
		toAdd = toAdd.toUpperCase();
		var hiddenDivs = $("service2");
        if(toAdd == "GP" || toAdd == "DENNIS"){
			$("#service2").css("display", "block");
			}
			else{
			$("#service2").css("display", "none");
			}
        });
    });
