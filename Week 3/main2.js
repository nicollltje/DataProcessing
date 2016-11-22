/* Nicol Heijtbrink, 10580611, main2.js */

window.onload = function() {
	
	changeColor()
}	
	
function getPopulation(country_name){
	var data = document.getElementById("rawdata").value;
	var obj = JSON.parse(data);
	var populationString = obj[country_name];
	if (typeof(populationString) == 'undefined'){
		return 0
	}
	else if (typeof(populationString) != 'undefined'){
		var populationNumber = parseInt(populationString.split(',').join(''));
		return (populationNumber);
	}		
	
}

function getCountryNameFromCode(code){
 	var shortCodes = country_codes.map(function(value,index) { return value[0]; });
 	var index = shortCodes.indexOf(code);
 	if(index > 0){
  		country_name = country_codes[index][2];
  		return country_name;
 	}
 	return "Error";
}

function changeColor() {
 	var svgCountries = document.getElementsByClassName('landxx');
 	for (var i = 0; i < svgCountries.length; i++) {
  		var country = svgCountries[i];
  		var countryId = country.getAttribute('class').split(' ')[1];
  		if(countryId == "coastxx"){
			countryId = country.getAttribute('class').split(' ')[2];
		}
		var country_name = getCountryNameFromCode(countryId);
		var population = getPopulation(country_name);
  		country.style.fill = getColorForPopulation(population);
 	}
}

function getColorForPopulation(population){
	if (population > 100000000) {
		return "#8e0152";
	}
	else if (population > 50000000) {
		return "#c51b7d";
	}
	else if (population > 10000000) {
		return "#de77ae";
	}
	else if (population > 5000000) {
		return "#f1b6da";
	}
	else if (population > 1000000) {
		return "#fde0ef";
	}
	else if (population > 500000) {
		return "#e6f5d0";
	}
	else if (population > 100000) {
		return "#b8e186";
	}
	else if (population > 50000) {
		return  "#7fbc41";
	}
	else if (population > 10000) {
		return "#4d9221";
	}
	else if (population < 10000) {
		return "#276419";
	}
	else if (population = 0){
		return "#D1D1D1";
	}
}

