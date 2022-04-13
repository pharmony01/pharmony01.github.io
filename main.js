const myHeading = document.querySelector('h1');
myHeading.textContent = 'Oh this actually does work';
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);