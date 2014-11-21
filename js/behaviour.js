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
	if(submitbutton2.addEventListener){
		submitbutton2.addEventListener("click", function() {
			if (submitbutton2.value == 'find services in your area'){
				submitbutton2.value = '';
			}
		});
	}
}