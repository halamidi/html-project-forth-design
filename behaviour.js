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
$("#slideshow > div:gt(0)").hide();

var slide = setInterval(function auto() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  6000);

$("#nextsld").click(function(){
	$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
});
$("#prevsld").click(function(){
	$('#slideshow > div:last')
		.fadeOut(1000)
		.prev()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
});