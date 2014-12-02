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
/*
$(document).ready(function(){
    $('.searchbutton').click(function(){
		
        var toAdd = $('#erase').val();
		toAdd = toAdd.toUpperCase();
		var hickeys = ["PHARMACY", "HICKEYS"];
		var found = (hickeys.indexOf(toAdd) > -1);
		var dennis = ["DENNIS", "GP"];
		var found2 = (dennis.indexOf(toAdd) > -1);
        if(found == true){
			$("#service1").css("display", "block");
			$("#service2").css("display", "none");
			found = false;
			}
			else if(found2 == true){
			$("#service2").css("display", "block");
			$("#service1").css("display", "none");
			found2 = false;
			}
			else{
				$("#service2").css("display", "none");
				$("#service1").css("display", "none");
			}
        });
    });*/
	//not sure which one i am going to use
	/*$(document).ready(function(){
    $('.searchbutton').click(function diplay(){
		//clear previous search
		$("#service2").css("display", "none");
		$("#service1").css("display", "none");
		//declare variable
        var toAdd = $('#erase').val();
		//change string to uppercase
		toAdd = toAdd.toUpperCase();
		//switch case to search and display divs
        switch(toAdd){
			case 'GP':
				$("#service2").css("display", "block");
			break;
			case 'DENNIS':
				$("#service2").css("display", "block");
			break;
			case 'PHARMACY':
				$("#service1").css("display", "block");
			break;
			case 'HICKEYS':
				$("#service1").css("display", "block");
			break;
			}
        });
    });
*/
$(document).ready(function(){
    $('.searchbutton').click(function(){
		//reset display style
		$("#service2").css("display", "none");
		$("#service1").css("display", "none");
		$("#service3").css("display", "none");
		$("#service4").css("display", "none");
		$("#service5").css("display", "none");
		$("#service6").css("display", "none");
		//removes paragraph
		$( "p" ).remove( ":contains('no results found')" );
		//declare and initialize variable 
        var toAdd = $('#erase').val();
		toAdd = toAdd.toUpperCase();
		var cat = $('#category').val();
		var loc = $('#location').val();
		//create array not sure if i intend on using array in this version
		var hickeys2 = ["PHARMACY", "HICKEYS"];
		var found = (hickeys2.indexOf(toAdd) > -1);
		var dennis2 = ["DENNIS", "GP"];
		var found2 = (dennis2.indexOf(toAdd) > -1);
		//search parameters
		//is it a pharmacy
    if(cat === "Pharmacy"){
		//is it in dublin
			if(loc === "Dublin")
				{
				//keywords
				 switch(toAdd){
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					default:
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
					}	
				}
				//is it in wicklow
				else if(loc == "Wicklow")
				{
				 switch(toAdd){
				 //keywords
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
						$("#service4").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					case 'ROCHES':
						$("#service4").css("display", "block");
					break;
					default:
						$("#service1").css("display", "block");
						$("#service4").css("display", "block");
						$("#service5").css("display", "block");
					}	
				}
				else{
				switch(toAdd){
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
						$("#service4").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					case 'ROCHES':
						$("#service4").css("display", "block");
					break;
					default:
						$("#service1").css("display", "block");
						$("#service4").css("display", "block");
						$("#service5").css("display", "block");
					}	
				}
	}
			//is it a gp
	else if(cat == "GP"){
			//is it in dublin
				if(loc == "Dublin")
				{
				//keywords
				 switch(toAdd){
					case 'DENNIS':
						$("#service2").css("display", "block");
					break;
					case 'MITCHELLS':
						$("#service3").css("display", "block");
					break;
					case 'GP':
					case 'DOCTORS':
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
					break;
					default:
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
					}	
				}
				else if(loc == "Wicklow")
				{
				 switch(toAdd){
					case 'DENNIS':
						$("#service3").css("display", "block");
					break;
					case 'GP':
					case 'DOCTORS':
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					break;
					default:
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					}	
				}
				else{
				switch(toAdd){
					case 'DENNIS':
						$("#service2").css("display", "block");
					break;
					case 'MITCHELLS':
						$("#service3").css("display", "block");
					break;
					case 'GP':
					case 'DOCTORS':
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					break;
					default:
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					}	
				}
	}
	else{
				if(loc == "Dublin")
				{
				//keywords
				 switch(toAdd){
					case 'DENNIS':
						$("#service2").css("display", "block");
					break;
					case 'MITCHELLS':
						$("#service3").css("display", "block");
					break;
					case 'GP':
					case 'DOCTORS':
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
					break;
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					default:
						$("#service3").css("display", "block");
						$("#service5").css("display", "block");
						$("#service1").css("display", "block");
						$("#service2").css("display", "block");
					}	
				}
				//is it in wicklow
				else if(loc == "Wicklow")
				{
				 switch(toAdd){
				 //keywords
					case 'GP':
					case 'DOCTORS':
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					break;
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
						$("#service4").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					case 'ROCHES':
						$("#service4").css("display", "block");
					break;
					default:
						$("#service1").css("display", "block");
						$("#service4").css("display", "block");
						$("#service5").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					}	
				}
				else{
				switch(toAdd){
					case 'DENNIS':
						$("#service2").css("display", "block");
					break;
					case 'MITCHELLS':
						$("#service3").css("display", "block");
					break;
					case 'DOCTORS':
					case 'GP':
						$("#service2").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
					break;
					case 'PHARMACY':
						$("#service1").css("display", "block");
						$("#service5").css("display", "block");
						$("#service4").css("display", "block");
					break;
					case 'HICKEYS':
						$("#service1").css("display", "block");
					break;
					case 'BOOTS':
						$("#service5").css("display", "block");
					break;
					case 'ROCHES':
						$("#service4").css("display", "block");
					break;
					case 'ALL':
					//just used as test
						$("#service1").css("display", "block");
						$("#service4").css("display", "block");
						$("#service5").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
						$("#service2").css("display", "block");
					break;
					default:
						$('<p>no results found</p>').appendTo('#centersearch');
					}	
				}
		}
		//changes height of divs depending on how many child divs are visible
		//for now there are only 6 child divs available so there is no need to check for more than one 
		var visiblediv = $('#centersearch > :visible').length
			if(visiblediv > 5){
				$("#searchmain").css("height", "875px");
				$("#centersearch").css("height", "863px");
				$("#largeside2").css("height", "875px");
				$("#sidediv").css("height", "863px");
				$("#sidepg2").css("height", "1140px");
			}
			else if(visiblediv > 6){
			$("#centersearch").css("overflow-y", "scroll");
			
			}
			else{
				$("#searchmain").css("height", "725px");
				$("#centersearch").css("height", "713px");
				$("#largeside2").css("height", "725px");
				$("#sidediv").css("height", "713px");
				$("#sidepg2").css("height", "992px");
			}
        });
    });
	
	
		//DROPDOWN MENU
	
	
var timeout	= 100;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 