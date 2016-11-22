/* use this to test out your function */
window.onload = function() {
 	changeColor("nor", "#3498db");
 	changeColor("rsa", "#8e44ad");
 	changeColor("ch", "#34495e");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	var country = document.getElementById(id);
	country.style.fill=color;
}