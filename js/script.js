var secHand = document.getElementById("sec");
var minHand = document.getElementById("min");
var hourHand = document.getElementById("hour");

a = setInterval (function (){
	var  time = new Date();
	var saniye = time.getSeconds();
	console.log(saniye);
	secHand.style.transform = 'rotate('+saniye*6+'deg)';
	secHand.style.transformOrigin = 'bottom center';
}, 1000);

b = setInterval (function (){
	var  time = new Date();
	var deqiqe = time.getMinutes();
	console.log(deqiqe);
	minHand.style.transform = 'rotate('+deqiqe*6+'deg)';
	minHand.style.transformOrigin = 'bottom center';
}, 1000);

c = setInterval (function (){
	var  time = new Date();
	var saat = time.getHours();
	console.log(saat);
	hourHand.style.transform = 'rotate('+saat*30+'deg)';
	hourHand.style.transformOrigin = 'bottom center';
}, 1000);