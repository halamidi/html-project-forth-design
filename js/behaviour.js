
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
//need to put in separate js but need to get working first
/*
function getid(a_id){
	return document.getElementById(a_id);
}
function close_all(){
for(i = 0; i < 999; i++){
	var o = getid("service" +i);
	if(o){
	o.style.display="none";
	{
}
}

function findDiv(){
	close_all();
	var search = getid("erase");
	var name = erase.value;
	name = name.toUpperCase();
	var strSearch = erase.split(/\w/);

	for(var i = 0, charlenght = strSearch.length; i < charlenght; i++){
		var currentsearch = erase[i].toUpperCase();
		if(currentsearch !== ""){
			alert("got this far2");
			hiddenDivs = document.getElementsByClassName("searchresult");
			for(var j = 0, divsize = hiddenDivs.length; j < divsize; j++){
				if(hiddenDivs[j].textContent.toUpperCase().indexOf(currentsearch) !== -1){
				hiddenDivs[j].style.display = "block";
				
			
				}
			}
		}
	}
}*/
function findDiv(){
	alert("test1");
	var search = document.getElementById("erase");
	var name = search.value;
	name = name.toUpperCase();
	var hiddenDivs = document.getElementsById("service1");
 if(name == "GP"){
	alert("test");
	hiddenDivs.style.display = "block";
 }
}
