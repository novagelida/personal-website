// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 7;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){
    var cookieBannerContainer = document.getElementsByClassName("navbar")[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>My website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in my <a href="#cookiesPolicy" data-toggle="modal">privacy and cookies policy</a>. <a class="close-cookies-banner" href="javascript:void(0);" onclick="removeMe();"><i class="fa fa-times"></i></a></p>';    
 // Be advised the Close Banner 'X' link requires jQuery
     
    //bodytag.appendChild(div); 
    // or
    cookieBannerContainer.appendChild(div,cookieBannerContainer.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    div.className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
    //createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
 
 
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
}
 
function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}