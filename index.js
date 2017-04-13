/*
 * index.js
 * Put your JavaScript in here
 */

"use strict;"

/*===========================*/
/* put global variables here */
/*===========================*/


/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	alert("onDeviceReady() fired");
}

/*====================*/
/* put functions here */
/*====================*/

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}