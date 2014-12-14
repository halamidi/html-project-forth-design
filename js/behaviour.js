//onload function works this is only to remove text from search box
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

//this creates cookies
function createCookie(name,value,days) {
	//sets the expire date for cookies
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	//sets cookies name value and expiry date
	document.cookie = name+"="+value+expires+";";
}
//this reads the cookie
function readCookie(name) {
//this checks for cookies name and if name exists then it will returns the cookies value
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
//this erases the cookie
window.eraseCookie = function eraseCookie(name) {
	//this erases cookie by checking for name and sets that cookies expiry date to -1
	//that way the cookie will immediately
	createCookie(name,"",-1);
}
//this checks to see if the cookie exists
function checkCookie(name){
isItThere = document.cookie.indexOf(name+"="); 
return isItThere;
}

$(document).ready(window.searchft = function searchft(){
		//reset display style
		$("#service2").css("display", "none");
		$("#service1").css("display", "none");
		$("#service3").css("display", "none");
		$("#service4").css("display", "none");
		$("#service5").css("display", "none");
		$("#service6").css("display", "none");
		//removes paragraph
		$( "p" ).remove( ":contains('no results found')" );
		//declare and initialize variables for
		var toAdd;
		var cat;
		var loc;
		var check = document.getElementById("erase").value;
		var check2 = $('#category').val();
		var check3 = $('#location').val();
		//separate if statements to check what user inputs has new values in them
		if(check != "find services in your area" && check != ""){
			//if check is equal to the above parameters then the name,value and expire value is sent to the functions 
			//the expiry date is set to 0 so once you exit the browser the cookie is deleted 
			createCookie('Userinpt1',check,0);
		}
		if(check2 != "Services"){
			createCookie('Userinpt2',check2,0);
		}
		if(check3 != "Location"){
			createCookie('Userinpt3',check3,0);
		}
		//call function to check if cookie exists
		var ckcookie = checkCookie('Userinpt1');
		if (ckcookie != -1){
		//if the cookie exists then sets the value toAdd for search result
		toAdd = readCookie('Userinpt1');
		//changes toAdd value to upper case to ignore case sensitive results
		toAdd = toAdd.toUpperCase();
		}
		//call function to check if cookie exists
		ckcookie = checkCookie('Userinpt2');
		if (ckcookie != -1){
		//if the cookie exists then sets the value toAdd for search result
		cat = readCookie('Userinpt2');
		}
		//call function to check if cookie exists
		ckcookie = checkCookie('Userinpt3');
		if (ckcookie != -1){
		//if the cookie exists then sets the value toAdd for search result
		loc = readCookie('Userinpt3');
		}
       
		//search parameters
		//is it a pharmacy
    if(cat === "Pharmacy"){
		//is it in Dublin
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
				//is it in Wicklow
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
				//location not specified 
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
			//is it in Dublin
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
				//is it in Wicklow
				else if(loc == "Wicklow")
				{
				//keywords
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
				//location not specified
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
	//category not specified
	else{
				//is it in Dublin
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
				//is it in Wicklow
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
				//no location or category specified
				else{
				//keywords
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
					//just used as test to view all 
						$("#service1").css("display", "block");
						$("#service4").css("display", "block");
						$("#service5").css("display", "block");
						$("#service3").css("display", "block");
						$("#service6").css("display", "block");
						$("#service2").css("display", "block");
					break;
					//this is a last resort if nothing matches no result will be displayed on screen
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
				$("#sidepg2").css("height", "900px");
			}
			//if there are more than 6 divs then a scroll bar will popup 
			else if(visiblediv > 6){
			$("#centersearch").css("overflow-y", "scroll");
			
			}
			//this resets all sizes of divs
			else{
				$("#searchmain").css("height", "725px");
				$("#centersearch").css("height", "713px");
				$("#largeside2").css("height", "725px");
				$("#sidediv").css("height", "713px");
				$("#sidepg2").css("height", "752px");
			}
 
    });